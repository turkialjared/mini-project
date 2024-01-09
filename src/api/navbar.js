import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <nav className="text-bg-danger">
      <div className="max-w-7xl mx bg-gray-800">
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
