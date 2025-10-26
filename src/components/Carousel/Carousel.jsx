import { useState } from "react";
import "./Carousel.scss";

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="carousel">
      <img src={pictures[index]} alt="" className="carousel__image" />

      {total > 1 && (
        <>
          <button className="carousel__button carousel__button--prev" onClick={prev}>
            ‹
          </button>
          <button className="carousel__button carousel__button--next" onClick={next}>
            ›
          </button>

          <div className="carousel__indicator">
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}
