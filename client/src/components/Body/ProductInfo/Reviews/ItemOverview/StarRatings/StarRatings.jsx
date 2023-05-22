import styles from "./StarRatings.module.css"

export default function StarRating() {
    return (
        <div className={styles['star-rating-container']}>
            <div className={styles['header']}>Select star ratings</div>
            <div className={styles['button-container']}>
                <button className={styles['btn']}>★ 5</button>
                <button className={styles['btn']}>★ 4</button>
                <button className={styles['btn']}>★ 3</button>
                <button className={styles['btn']}>★ 2</button>
                <button className={styles['btn']}>★ 1</button>
            </div>
        </div>
    )
}