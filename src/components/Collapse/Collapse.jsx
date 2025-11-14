import { useState } from "react";
import Arrow from "../../assets/arrow.svg";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <img
          src={Arrow}
          alt=""
          className={`collapse__arrow ${open ? "open" : ""}`}
        />
      </div>

      <div className={`collapse__content ${open ? "open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}
