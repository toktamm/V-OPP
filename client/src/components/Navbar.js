import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const history = useHistory()

  const [click, setClick] = useState(false);

  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    let token = localStorage.getItem('token')
    // props.setLoggedIn(false)
    token ? props.setLoggedIn(true) : props.setLoggedIn(false)
  },[])

  const handleClick = () => setClick(!click);

  const logout = ()=>{
    localStorage.removeItem('token')
    props.setLoggedIn(false)
    history.push('/')
  }

  return (
    <>
    {props.loggedIn}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            V-OPP
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>  
          { !props.loggedIn ? 
          <>        
            <li className="nav-item">
              <Link to="/login" className="nav-links">
                login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-links">
                register
              </Link>
            </li>
            </> :
            <>
              <li >
              <Link  className="nav-links" to="/profile"> Hi {props.user && props.user.first_name} </Link>
            </li> 

            
            <li >
              <Link onClick={logout} className="nav-links">  Logout </Link>
            </li>
            </>
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
