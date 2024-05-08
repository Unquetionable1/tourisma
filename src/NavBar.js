import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav className="Nav-Bar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/tours"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
      <NavLink to="/favourite"
      className="nav-link"
        >
            favourite
        </NavLink>
        <NavLink to="/visit"
        className="nav-link"
        >
            visit
        </NavLink>
    </nav>
  );
};

export default NavBar;