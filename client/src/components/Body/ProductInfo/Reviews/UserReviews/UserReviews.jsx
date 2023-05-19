import { useState } from "react";
import styles from "./UserReviews.module.css";

export default function UserReviews(props) {
  // console.log(props.productInfo);
  const [displayed, setDisplayed] = useState(3);

  const loadMore = () => {
    setDisplayed(displayed + 3);
  }

  return (
    <div>
      <button className={styles["sort-btn"]}>Sort by</button>
      <div className={styles["user-review-container"]}>
        {props.productInfo.slice(0, displayed).map((review, index) => (
          <div key={index} className={styles["user-review"]}>
          <div className={styles["header"]}>{review.title}</div>
          <div className={styles["stars"]}>{review.stars} stars</div>
         <p>{review.body}</p>
          <div className={styles["info"]}>
            {review.account} | {review.review_date} | Verified Purchaser | Incentivised Review
          </div>
          <div className={styles["info"]}>
            Colour: Cloud White / Cloud White / Cloud White | Size: 9
          </div>
          <div className={styles['helpful']}>
          <p>Helpful? </p>
          <img className={styles['thumb']} src="./img/thumb_up_FILL0_wght400_GRAD0_opsz48.svg"/>
          <p>{review.likes}</p>
          <img className={styles['thumb']} src='./img/thumb_down_FILL0_wght400_GRAD0_opsz48.svg'/>
          <p>0</p>
          </div>
          <p className={styles["report"]}>Report review</p>
        </div>
        ))}
      </div>
      {displayed < props.productInfo.length && (
        <button className={styles['load']} onClick={loadMore}>Read more reviews</button>
      )}
    </div>
  );
}
