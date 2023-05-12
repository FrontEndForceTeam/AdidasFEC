import styles from "./Gallery.module.css";

export default function Gallery() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div id="gallery">
      {testArray.map((image) => {
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

function pauseVideo(e) {
  console.log("pause video");
}
