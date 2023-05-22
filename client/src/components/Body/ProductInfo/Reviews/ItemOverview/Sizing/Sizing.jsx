import styles from "./Sizing.module.css";

export default function Sizing() {
  return (
    <div className={styles["sizing-container"]}>
      <div className={styles["size"]}>
        <div className={styles["header"]}>Size</div>
        <div className={styles["bar"]}>
          <div className={styles["triangle"]}></div>
        </div>
        <div className={styles["bottom-row"]}>
          <p>Too small</p>
          <p>Perfect</p>
          <p>Too large</p>
        </div>
      </div>
      <div className={styles["width"]}></div>
      <div className={styles["header"]}>Width</div>
      <div className={styles["bar"]}>
        <div className={styles["triangle"]}></div>
      </div>
      <div className={styles["bottom-row"]}>
        <p>Too narrow</p>
        <p>Perfect</p>
        <p>Too wide</p>
      </div>
    </div>
  );
}
