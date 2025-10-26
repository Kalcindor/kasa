import { useState } from "react";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={open ? "arrow arrow--open" : "arrow"}>⌃</span>
      </div>

      {open && <div className="collapse__content">{children}</div>}
    </div>
  );
}