import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  );
}
