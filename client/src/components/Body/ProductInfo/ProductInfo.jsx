import Reviews from "./Reviews/Reviews";
import Description from "./Description/Description";
import Details from "./Details/Details";
import Style from "./HowToStyle/Style";
import styles from "./ProductInfo.module.css";

export default function ProductInfo() {
  return (
    <div className={styles['product-info-container']}>
      <div className={styles["reviews-container"]}><Reviews /></div>
      <div><Description /></div>
      <div><Details /></div>
      <div><Style /></div>
    </div>
  );
}
