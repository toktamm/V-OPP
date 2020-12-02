import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar(props) {
  const history = useHistory();

  const [click, setClick] = useState(false);

  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem("token");
    // props.setLoggedIn(false)
    token ? props.setLoggedIn(true) : props.setLoggedIn(false);
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logout = () => {
    localStorage.removeItem("token");
    props.setLoggedIn(false);
    history.push("/");
  };

  return (
    <>
      {props.loggedIn}
      
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
            style={{ textDecoration: "none" }}
          >
        <img className="logo" src="./images/logo.png"  height={53}/>
            V-OPP
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {!props.loggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/register"
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    className="nav-links"
                    to="/profile"
                    style={{ textDecoration: "none" }}
                    onClick={closeMobileMenu}
                  >
                    {" "}
                    Welcome {props.user && props.user.first_name}{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={logout}
                    className="nav-links"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Logout{" "}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
