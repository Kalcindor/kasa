import { useParams } from "react-router-dom";
import data from "../../data/housing.json";
import Tag from "../../components/Tag/Tag";
import "./Housing.scss";

export default function Housing() {
    const { id } = useParams();
    const housing = data.find((item) => item.id === id);
    
if (!housing) return <Navigate to="/not-found" />;
return (
    <>
      <h1>{housing.title}</h1>
      <p>{housing.location}</p>
      <div className="tags">
        {housing.tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
      </div>
    </>
  );
}
