import styles from "./Style.module.css";

export default function Style() {
  return (
    <div>
      <button className={styles["toggle-btn"]}>How to style</button>
      <div className={styles['style-container']}>

      </div>
    </div>
  );
}
