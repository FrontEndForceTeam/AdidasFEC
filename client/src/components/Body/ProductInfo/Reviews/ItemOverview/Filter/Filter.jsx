import styles from "./Filter.module.css"

export default function Filter() {
  return (
    <div className={styles['filter-container']}>
      <div className={styles['filter-header']}>Filter reviews by</div>
      <div className={styles['filter-btn']}>
        <button className={styles['btn']}>Satisfaction</button>
        <button className={styles['btn']}>Color</button>
        <button className={styles['btn']}>Comfort</button>
        <button className={styles['btn']}>Appearance</button>
        <button className={styles['btn']}>Quality</button>
      </div>
      <div className={styles['filter-header']}>More filters</div>
    </div>
  )
}
