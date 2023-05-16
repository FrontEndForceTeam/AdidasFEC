import styles from "./TopFooter.module.css";

export default function TopFooter() {
  return (
    <div id={styles["footer-container"]}>
      <div id={styles["feedback"]} className={styles["phone"]}>
        <h5 className={styles["feedback-text"]}>YOUR OPINION COUNTS</h5>
        <p className={styles["feedback-text"]}>
          We strive to serve you better and appreciate your feedback
        </p>
      </div>
      <button type="button" id="back-to-btn">
        BACK TO TOP
      </button>
      <div id={styles["ctrl-container"]}>
        <button className={styles["ctrl-btn"]}>LOGIN</button>
        <button className={styles["ctrl-btn"]}>YOUR BAG (0)</button>
      </div>
      <div id={styles["pre-footer"]}>
        <span id={styles["member-message"]}>
          BECOME A MEMBER & GET 10% OFF*
        </span>
        <button id={styles["sign-up-btn"]}>
          <span>SIGN UP FOR FREE</span>
          <div id={styles["img-container"]}>
            <img id={styles["arrow"]}></img>
          </div>
        </button>
      </div>
    </div>
  );
}
