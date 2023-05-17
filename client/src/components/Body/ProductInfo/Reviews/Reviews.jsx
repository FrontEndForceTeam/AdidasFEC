import UserReviews from "./UserReviews/UserReviews";
import ItemOverview from "./ItemOverview/ItemOverview";
import styles from "./Reviews.module.css";

export default function Reviews() {
  
  return (
      <div className={styles["reviews-container"]}>
        <div className={styles["item-overview-container"]}>
          <ItemOverview />
        </div>
        <div className={styles["user-reviews-container"]}>
          <UserReviews />
        </div>
      </div>
  );
}
