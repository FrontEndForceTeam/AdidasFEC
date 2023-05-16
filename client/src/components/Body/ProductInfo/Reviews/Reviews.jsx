import UserReviews from "./UserReviews/UserReviews";
import ItemOverview from "./ItemOverview/ItemOverview";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div className={styles['overall']}>
      <button className={styles["toggle-btn"]}>
        <div>Reviews (434)</div>
        <div>4.7</div>
        </button>
      <div className={styles["reviews-container"]}>
        <div className={styles["item-overview-container"]}>
          <ItemOverview />
        </div>
        <div className={styles["user-reviews-container"]}>
          <UserReviews />
        </div>
      </div>
    </div>
  );
}
