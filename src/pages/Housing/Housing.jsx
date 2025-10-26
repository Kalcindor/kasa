import { useParams } from "react-router-dom";
import data from "../../data/housing.json";

export default function Housing() {
    const { id } = useParams();
    const housing = data.find((item) => item.id === id);
    
if (!housing) return <Navigate to="/not-found" />;
return (
    <>
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      {/* On développera ici : tags, rating, carousel, description, équipements */}
    </>
  );
}
