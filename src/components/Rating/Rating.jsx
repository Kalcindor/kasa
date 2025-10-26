import "./Rating.scss";

export default function Rating({ value }) {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => index < value);

  return (
    <div className="rating">
      {stars.map((isFilled, index) => (
        <span
          key={index}
          className={isFilled ? "star star--filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
