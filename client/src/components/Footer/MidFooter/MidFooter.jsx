import styles from "./MidFooter.module.css";
export default function MidFooter() {
  return (
    <footer id={styles["mid-footer"]}>
      <ul className={styles["footer-category"]}>
        <h5>PRODUCTS</h5>
        <li className={styles["footer-item"]}>
          <a>Shoes</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Clothing</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Accessories</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>New Arrivals</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Release Dates</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Top Sellers</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Outlet</a>
        </li>
      </ul>
      <ul className={styles["footer-category"]}>
        <h5>SPORTS</h5>
        <li className={styles["footer-item"]}>
          <a>Football</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Basketball</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Golf</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Gym & Training</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Outdoor</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Rugby</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Running</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Tennis</a>
        </li>
      </ul>
      <ul className={styles["footer-category"]}>
        <h5>COLLECTIONS</h5>
        <li className={styles["footer-item"]}>
          <a>Originals</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>IVY PARK</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Ultraboost</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>NMD</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Gazelle</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Superstar</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Stan Smith</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Ozweego</a>
        </li>
      </ul>
      <ul className={styles["footer-category"]}>
        <h5>SUPPORT</h5>
        <li className={styles["footer-item"]}>
          <a>Help</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Returns & Refunds</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Delivery</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Size Charts</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Store Finder</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Sitemap</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Student discount</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Gift Cards</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>European Disputes Resolution</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Imprint</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Modern Slavery Act Transparency Statement</a>
        </li>
      </ul>
      <ul className={styles["footer-category"]}>
        <h5>COMPANY INFO</h5>
        <li className={styles["footer-item"]}>
          <a>About Us</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Careers</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Press</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Mobile Apps</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>adidas Confirmed</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>adidas Blog</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>adidas News</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Affiliate Program</a>
        </li>
        <li className={styles["footer-item"]}>
          <a>Location Selector </a>
        </li>
        <h5>MORE ADIDAS</h5>
        <li className={styles["footer-item"]}>
          <a>Training Equipment</a>
        </li>
      </ul>
      <ul id={styles["footer-category"]}>
        <h5>FOLLOW US</h5>
        <li className={styles["footer-item"]}>
          <img alt="Facebook"></img>
        </li>
        <li className={styles["footer-item"]}>
          <img alt="Insta"></img>
        </li>
        <li className={styles["footer-item"]}>
          <img src="Twitter"></img>
        </li>
        <li className={styles["footer-item"]}>
          <img src="Pinterest"></img>
        </li>
        <li className={styles["footer-item"]}>
          <img src="Tiktok"></img>
        </li>
        <li className={styles["footer-item"]}>
          <img src="Youtube"></img>
        </li>
      </ul>
    </footer>
  );
}
