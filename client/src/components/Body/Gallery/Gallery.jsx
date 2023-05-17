import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

let apiURL = "http://127.0.0.1:3500/gallery/1";

export default function Gallery() {
  const [galleryArray, setGalleryArray] = useState(null);
  const [showBtn, setShowBtn] = useState("Show More");
  const testArray = [
    { num: 1, type: "image" },
    { num: 2, type: "video" },
    { num: 3, type: "image" },
    { num: 4, type: "image" },
    { num: 5, type: "image" },
    { num: 6, type: "image" },
    { num: 7, type: "image" },
    { num: 8, type: "image" },
    { num: 9, type: "image" },
  ];

  useEffect(() => {
    const getAPI = async () => {
      let response = await fetch(apiURL);
      let data = await response.json();
      setGalleryArray(data);
    };
    getAPI();
  }, []);
  console.log(galleryArray);

  return (
    galleryArray && (
      <div id={styles["gallery"]}>
        {galleryArray.map((image, index) => {
          if (image.i == 2) {
            return <ProductVideo video={image.image_url} />;
          } else if (index == 4) {
            return (
              <>
                <ShowMoreButton show={showBtn} />
                <ProductImage index={image.i} url={image.image_url} />
              </>
            );
          }
          return <ProductImage index={image.i} url={image.image_url} />;
        })}
      </div>
    )
  );
}

function ProductImage(props) {
  console.log(props.url);
  return (
    <div className={styles["gallery-container"]}>
      <img className={styles["image"]} src={props.url}></img>
    </div>
  );
}

function ProductVideo(props) {
  return (
    <div className={styles["gallery-container"]}>
      <video
        autoPlay
        loop
        alt="video"
        playsInline=""
        src={props.video}
        onClick={(e) => {
          pauseVideo(e);
        }}
        id="video-item"
      ></video>
    </div>
  );
}

function ShowMoreButton(props) {
  return (
    <div id={styles["btn-container"]}>
      <button>
        <span>{props.show}</span>
        <img alt="[arrow icon]"></img>
      </button>
    </div>
  );
}

function pauseVideo(e) {
  console.log("pause video");
}

function showMore(e) {
  console.log("show more");
}
