import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../configurations/domain/redux/Authentication";
import { clearState } from "../../../configurations/domain/redux/Product";
import { ApiService } from "../../../configurations/services/api/ApiService";
import "./navbar.css";

const Navbar = () => {
  const {
    user: { firstName, lastName },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const { status, message } = await ApiService.auth.logout();
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      dispatch(clearState());
      dispatch(logout());
    }
  };
  return (
    <nav className="navbar-ctna">
      <div className="user-ctn">
        <a
          className="nav-link dropdown-toggle user-link"
          href="http://lc.com"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {lastName + " " + firstName + " "}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <p className="dropdown-item">Action</p>
          </li>
          <li>
            <p className="dropdown-item">Another action </p>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <p onClick={handleLogout} className="dropdown-item">
              Logout
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
