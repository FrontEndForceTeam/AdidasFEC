import OverallReview from "./OverallReview/OverallReview";
import Sizing from "./Sizing/Sizing";
import Filter from "./Filter/Filter";
import StarRating from "./StarRatings/StarRatings";

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
