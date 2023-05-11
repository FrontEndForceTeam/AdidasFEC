import OverallReview from "./OverallReview/OverallReview";
import Sizing from "./Sizing/Sizing";
import Filter from "./Filter/Filter";
import StarRating from "./StarRatings/StarRatings";
import styles from "./ItemOverview.module.css";

export default function ItemOverview() {
  return (
    <>
        <OverallReview/>
        <Sizing/>
        <Filter/>
        <StarRating/>
    </>
  )
}
