import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}
