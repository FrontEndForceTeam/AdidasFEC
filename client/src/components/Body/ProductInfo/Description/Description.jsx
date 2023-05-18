import styles from "./Description.module.css";

export default function Description() {

  return (
    <div>
      <div className={styles["description-container"]}>
        <div className={styles["description"]}>
          <h2 className={styles['header']}>PROGRESSIVE TRAINERS WITH MODERN STYLE.</h2>
          <p className={styles['paragraph']}>
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
