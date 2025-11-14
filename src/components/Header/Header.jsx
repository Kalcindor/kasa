import { NavLink } from "react-router-dom";
import logo from "../../assets/kasa-logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}
