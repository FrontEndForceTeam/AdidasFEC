import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [showBtn, setShowBtn] = useState("Show More");
  return (
    <div id={styles["gallery"]}>
      {testArray.map((image, index) => {
        if (image.type == "video") {
          return <ProductVideo url={image.url} />;
        } else if (index == 4) {
          return (
            <>
              <ShowMoreButton show={showBtn} />
              <ProductImage image={image} />
            </>
          );
        }
        return <ProductImage image={image} />;
      })}
    </div>
  );
}

function ProductImage(props) {
  return (
    <div className={styles["gallery-container"]}>
      {props.image}
      <img className={styles["image"]}></img>
    </div>
  );
}

function ProductVideo(props) {
  return (
    <div>
      <video
        loop=""
        playsInline=""
        src={props.url}
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
    <button>
      <span>{props.show}</span>
      <img alt="[arrow icon]"></img>
    </button>
  );
}

function pauseVideo(e) {
  console.log("pause video");
}

function showMore(e) {
  console.log("show more");
}
