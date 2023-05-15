import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
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
  const [showBtn, setShowBtn] = useState("Show More");
  return (
    <div id={styles["gallery"]}>
      {testArray.map((image, index) => {
        if (image.type == "video") {
          return <ProductVideo video={image.num} />;
        } else if (index == 4) {
          return (
            <>
              <ShowMoreButton show={showBtn} />
              <ProductImage image={image.num} />
            </>
          );
        }
        return <ProductImage image={image.num} />;
      })}
    </div>
  );
}

function ProductImage(props) {
  return (
    <div className={styles["gallery-container"]}>
      {`image-${props.image}`}
      <img className={styles["image"]}></img>
    </div>
  );
}

function ProductVideo(props) {
  return (
    <div className={styles["gallery-container"]}>
      <video
        loop=""
        alt={props.video}
        playsInline=""
        src=""
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
