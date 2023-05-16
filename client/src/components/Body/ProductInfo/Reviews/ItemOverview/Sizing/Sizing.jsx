import styles from "./Sizing.module.css";

export default function Sizing() {
  return (
    <div className={styles["sizing-container"]}>
      <div className={styles["size"]}>
        <h1 className={styles['header']}>Size</h1>
        <div className={styles['bar']}></div>
        <div className={styles['bottom-row']}>
          <p>Too small</p>
          <p>Perfect</p>
          <p>Too large</p>
        </div>
      </div>
      <div className={styles["width"]}></div>
    </div>
  );
}
