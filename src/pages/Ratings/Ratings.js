import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = (props) => {
  const { rating } = props;
  return (
    <Rating
      initialRating={rating}
      emptySymbol={<FontAwesomeIcon icon={faStar} />}
      fullSymbol={
        <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
      }
      readonly
    ></Rating>
  );
};

export default Ratings;
