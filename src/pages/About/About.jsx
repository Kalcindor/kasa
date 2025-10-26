import Banner from "../../components/Banner/Banner";
//import aboutBanner from "../../assets/banner-about.jpg";
import Collapse from "../../components/Collapse/Collapse";

export default function About() {
  return (
    <>
      <Banner /*text="À propos" */ />
      <h1>À propos</h1>
      <Collapse title="Fiabilité">
        <p>Votre texte ici...</p>
      </Collapse>

      <Collapse title="Respect">
        <p>Votre texte ici...</p>
      </Collapse>
    </>
  );
}
