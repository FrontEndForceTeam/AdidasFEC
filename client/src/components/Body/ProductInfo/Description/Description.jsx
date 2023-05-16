import styles from "./Description.module.css";

export default function Description() {
  function buttonClickHandler() {}

  return (
    <div>
      <button className={styles["toggle-btn"]} onClick={buttonClickHandler}>
        Description
      </button>
      <div className={styles["description-container"]}>
        <div className={styles["description"]}>
          <h3 className={styles['header']}>PROGRESSIVE TRAINERS WITH MODERN STYLE.</h3>
          <p>
            If you had to decide between style and innovation, which would you
            choose? Silly question. You shouldn't have to make a decision like
            that. Just lace up in these adidas ZX 5K Boost Shoes and be done
            with it. Built on the innovative spirit of the ZX design code, they
            have a full-length Boost midsole wrapped in translucent tooling.
            Suede overlays and reflective details accent the mesh upper for
            style that shines.
          </p>
        </div>
        <div className={styles["image"]}>
          <img src="../../../../../public/img/shoeimg.jpg" alt="shoe" />
        </div>
      </div>
    </div>
  );
}
