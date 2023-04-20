import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="globalnavigation">
      <NavLink className="navi" to="/">
        Home
      </NavLink>

      <NavLink className="navi" to="/Hvorforos">
        Hvorfor os
      </NavLink>
      <NavLink className="navi" to="/Tipsogtricks">
        Tips og tricks
      </NavLink>
      <NavLink className="navi" to="/Kontaktos">
        Kontakt os
      </NavLink>
    </nav>
  );
}
