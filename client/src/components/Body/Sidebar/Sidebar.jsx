import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles['sidebar-container']}>
      <div className={styles.description}>
        <div className={styles.preHeader}>
          <div className={styles.productCategory}>
            <span>Originals</span>
          </div>
          <button className={styles.reviewCount} link=".ProductInfo/reviews">* * * * *  434</button>
        </div>
        <h1 className={styles.productTitle}>
          <span>ZX 5K BOOST SHOES</span>
        </h1>
        <div className={styles.priceWrapper}>
          <div className={styles.price}><s>130 </s></div>
          <div className={styles.discountPrice}>84.50</div>
        </div>
        <div className={styles.colorName}>Core Black / Core Black / Grey Six</div>
      </div>
    </div>
  );
}
