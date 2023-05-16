import Carousel from "./Carousel/Carousel";
import Gallery from "./Gallery/Gallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Body.module.css";

export default function Body() {
  return (
    <div id={styles["body-container"]}>
      <div id={styles["main"]}>
        <Gallery />
        <Carousel />
        <ProductInfo />
        <Carousel />
        <Carousel />
      </div>
      <div id={styles["sidebar-container"]}>
        <Sidebar />
      </div>
    </div>
  );
}
