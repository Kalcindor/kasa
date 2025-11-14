import "./Footer.scss";
import logo from "../../assets/kasa-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
