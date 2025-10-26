import { NavLink } from "react-router-dom";
//import logo from "../../assets/logo-red.svg";
import "./Header.scss";
//<img src={logo} alt="Kasa" className="header__logo" />;
export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}
