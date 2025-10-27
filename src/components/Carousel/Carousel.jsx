import { useState } from "react";
import "./Carousel.scss";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";

export default function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % pictures.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img src={chevronLeft} alt="Précédent" />
          </button>
          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img src={chevronRight} alt="Suivant" />
          </button>
        </>
      )}

      <img
        src={pictures[index]}
        alt={`Photo ${index + 1}`}
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <p className="carousel__counter">
          {index + 1} / {pictures.length}
        </p>
      )}
    </div>
  );
}
