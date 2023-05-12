import Carousel from "./Carousel/Carousel";
import Gallery from "./Gallery/Gallery";
import ProductInfo from "./ProductInfo/ProductInfo";

import styles from './Body.module.css'

export default function Body() {
  return(
  <div className={styles['body-container']}>
    <Gallery />
    <ProductInfo />
    <Carousel />
  </div>
  )
}
