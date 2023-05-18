import Carousel from "./Carousel/Carousel";
import Gallery from "./Gallery/Gallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import Sidebar from "./Sidebar/Sidebar";
import styles from "./Body.module.css";

export default function Body(props) {
  return (
    <div id={styles["body-container"]}>
      <div id={styles["main"]}>
        <Gallery shoe={props.shoe} handleShoeChange={props.handleShoeChange} />
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
