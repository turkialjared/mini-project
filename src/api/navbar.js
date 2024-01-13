import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { deleteToken } from "../storage/storage";

const NavBar = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg  SS">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Bank
        </NavLink>
        {user == true ? (
          <>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/mainPage"
                  >
                    profile
                  </NavLink>
                </li>
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/account"
                >
                  Deposit & withdraw
                </NavLink>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/transactions"
                  >
                    transactions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/users"
                  >
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link active"
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
