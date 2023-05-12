import UserReviews from "./UserReviews/UserReviews";
import ItemOverview from "./ItemOverview/ItemOverview";
import styles from "./Reviews.module.css"

export default function Reviews() {
  return (
    <>
      <ItemOverview />
      <UserReviews />
    </>
  );
}
