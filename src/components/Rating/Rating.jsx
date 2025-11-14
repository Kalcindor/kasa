import fullStar from "../../assets/star-full.svg";
import emptyStar from "../../assets/star-empty.svg";
import "./Rating.scss";

export default function Rating({ value }) {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => index < value);

  return (
    <div className="rating">
      {stars.map((isFilled, index) => (
        <img
          key={index}
          src={isFilled ? fullStar : emptyStar}
          alt={isFilled ? "Étoile remplie" : "Étoile vide"}
          className="rating__star"
        />
      ))}
    </div>
  );
}
