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
        <ProductInfo shoe={props.shoe} />
        {/* complete the look */}
        <Carousel shoe={props.shoe} type="complete the look" />
        {/* youmay also like */}
        <Carousel shoe={props.shoe} type="you may also like" />
        {/* others also bought */}
        <Carousel shoe={props.shoe} type="others also bought" />
      </div>
      <div id={styles["sidebar-container"]}>
        <Sidebar />
      </div>
    </div>
  );
}
