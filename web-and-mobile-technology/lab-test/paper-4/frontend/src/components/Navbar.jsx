import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">🍳 Recipe Manager</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-recipe">Add Recipe</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
