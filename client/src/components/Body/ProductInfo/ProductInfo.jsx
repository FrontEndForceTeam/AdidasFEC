import Reviews from "./Reviews/Reviews";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Style from "./HowToStyle/Style";
import styles from "./ProductInfo.module.css";
import AccordionButton from "./Accordion/AccordionButton";

export default function ProductInfo() {
  return (
    <div className={styles["product-info-container"]}>
      <AccordionButton
        title={
          <div className={styles["overall"]}>
            <button className={styles["toggle-btn"]}>
              <div>Reviews (434)</div>
              <div className={styles['rating']}>
                <div>4.7</div>
                <div className={styles['stars']}>★★★★★</div>
              </div>
            </button>{" "}
          </div>
        }
        content={
          <div className={styles['content']}>
            <Reviews />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>Description</button>}
        content={
          <div className={styles['content']}>
            <Description />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>Details</button>}
        content={
          <div className={styles['content']}>
            <Details />
          </div>
        }
      />
      <AccordionButton
        title={<button className={styles["toggle-btn"]}>How to style</button>}
        content={
          <div className={styles['content']}>
            <Style />
          </div>
        }
      />
    </div>
  );
}
