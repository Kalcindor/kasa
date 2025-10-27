import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/banner-home.jpg";
import Card from "../../components/Card/Card";
import data from "../../data/housing.json";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <section className="cards-grid">
        {data.slice(0, 9).map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </>
  );
}
