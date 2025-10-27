import { useParams, Navigate } from "react-router-dom";
import data from "../../data/housing.json";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";

import "./Housing.scss";

export default function Housing() {
  const { id } = useParams();
  const housing = data.find((item) => item.id === id);

  if (!housing) return <Navigate to="/not-found" />;
  return (
    <>
      <Carousel pictures={housing.pictures} />

      <div className="housing-header">
        <div className="housing-info">
          <h1>{housing.title}</h1>
          <p className="housing-location">{housing.location}</p>

          <div className="tags">
            {housing.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="housing-host-rating">
          <div className="housing-host">
            <p className="housing-host__name">{housing.host.name}</p>
            <img
              className="housing-host__picture"
              src={housing.host.picture}
              alt={housing.host.name}
            />
          </div>
          <Rating value={parseInt(housing.rating)} />
        </div>
      </div>

      <div className="housing-collapse">
        <Collapse title="Description">{housing.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {housing.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}
