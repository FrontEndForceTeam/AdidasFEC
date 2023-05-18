import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { useParams } from "react-router-dom";

// let apiURL = `http://127.0.0.1:3500/gallery/1`;

export default function Gallery(props) {
  const [galleryArray, setGalleryArray] = useState(null);
  const { id } = useParams();
  const [shoeChange, setShoeChange] = useState(false);

  useEffect(() => {
    const getAPI = async () => {
      let apiURL = `http://127.0.0.1:3500/gallery/${props.shoe}`;
      let response = await fetch(apiURL);
      let data = await response.json();
      setGalleryArray(data);
    };
    getAPI();
  }, []);

  return (
    galleryArray && (
      <>
        <div id={styles["gallery"]} className={styles[""]}>
          {galleryArray.map((image, index) => {
            if (image.i == 2) {
              return (
                <ProductVideo
                  video={image.image_url}
                  key={`gallery-${index}`}
                />
              );
            }
            return (
              <ProductImage
                index={image.i}
                url={image.image_url}
                key={`gallery-${index}`}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            props.handleShoeChange(2);
          }}
          style={{ height: "300px" }}
        >
          pick shoe
        </button>
        <ShowMoreButton />
      </>
    )
  );
}

function ProductImage(props) {
  return (
    <div className={styles["gallery-container"]}>
      <img className={styles["image"]} src={props.url}></img>
    </div>
  );
}

function ProductVideo(props) {
  const [videoPlay, setVideoPlay] = useState(true);
  return (
    <div className={styles["gallery-container"]}>
      <video
        autoPlay
        loop
        alt="video"
        playsInline=""
        src={props.video}
        onClick={(e) => {
          videoPlay ? e.target.pause() : e.target.play();
          setVideoPlay(!videoPlay);
        }}
        id="video-item"
      ></video>
    </div>
  );
}

function ShowMoreButton(props) {
  const [showBtn, setShowBtn] = useState("Show More");
  const [arrow, setArrow] = useState(
    <svg id={styles["arrow"]} height={20} width={20}>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M1.5 9 8 15.5 14.5 9"
      ></path>
    </svg>
  );
  const [arrowDown, setArrowDown] = useState(false);
  return (
    <div id={styles["btn-container"]}>
      <button
        type="button"
        onClick={() => {
          showMore();
          if (!arrowDown) {
            setArrowDown(true);
            setShowBtn("Show Less");
            setArrow(
              <svg id={styles["arrow"]} height={20} width={20}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M1.5 14.5 8 8l6.5 6.5"
                ></path>
              </svg>
            );
          } else {
            setArrowDown(false);
            setShowBtn("Show More");
            setArrow(
              <svg id={styles["arrow"]} height={20} width={20}>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M1.5 9 8 15.5 14.5 9"
                ></path>
              </svg>
            );
          }
        }}
      >
        <span>{showBtn}</span>
        {arrow}
      </button>
    </div>
  );
}

function showMore() {
  document.getElementById(styles["gallery"]).classList.toggle(styles["show"]);
}
