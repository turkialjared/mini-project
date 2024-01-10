import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { deleteToken } from "../storage/storage";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Bank
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user == true ? (
          <>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      deleteToken();
                      setUser(false);
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    register
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
