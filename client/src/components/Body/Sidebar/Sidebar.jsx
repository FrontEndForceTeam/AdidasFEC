import styles from "./Sidebar.module.css";
// import Reviews from "./ProductInfo/Reviews.jsx"
 //import "AdhausDIN-Condtia" from "./src/fonts";

export default function Sidebar() {
  return (
    <div className={styles['sidebar-container']}> 
      <div className = "description">
        <div className = "preHeader">
          <div className = "productCategory">
            <span > Originals</span>
          </div>
          <button className="reviewCount" link = ".ProductInfo/reviews">* * * *  434</button>
        </div>
        <h1 className = "productTitle">
          <span> ZX 5K  BOOST SHOES</span>
          </h1>
        <div className = "price">84.50</div>
        <div className = "colorName">Core "Black / Core Black / Grey Six</div>
      </div>
    </div>
  );
}
