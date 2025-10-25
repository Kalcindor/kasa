import Banner from "../../components/Banner/Banner";
//import homeBanner from "../../assets/banner-home.jpg"; // ou l'image que tu veux

export default function Home() {
  return (
    <>
      <Banner
        //image={homeBanner}
        text="Chez vous, partout et ailleurs"
      />
      {/* Ici viendra la grille de Cards */}
    </>
  );
}
