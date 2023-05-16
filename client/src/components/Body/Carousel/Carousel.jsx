import styles from "./Carousel.module.css";

export default function Carousel(props) {
  const testData = [{ img: 1 }, { img: 2 }, { img: 3 }, { img: 4 }, { img: 5 }];
  return (
    <div className={styles["carousel-container"]}>
      {testData.map((image) => {
        return <CarouselElement img={image} />;
      })}
    </div>
  );
}
function CarouselElement(props) {
  return (
    <div className={styles["carousel-item"]}>
      <img alt={props.image} />
      <img alt="icon" className="icon" />
      <p className={styles["price"]}>$10</p>
      <h5>title</h5>
      <p>description</p>
    </div>
  );
}
