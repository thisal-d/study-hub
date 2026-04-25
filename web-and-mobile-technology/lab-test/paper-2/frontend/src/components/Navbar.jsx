import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">🎓 Student Manager</div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-student">Add Student</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
