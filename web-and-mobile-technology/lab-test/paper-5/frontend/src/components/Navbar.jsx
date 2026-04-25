import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">🏢 Employee Manager</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-employee">Add Employee</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
