import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { LoginContext } from "../context/LoginContext";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const { userLoginContext, setUserLoginContext } = useContext(LoginContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  // const hiddenIcon = () => {
  //   if (click)
  //   document.getElementById('userIcon').style.visibility = "hidden";
  //   document.getElementById('logOut').style.visibility = "hidden";
  // }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVEL <i class="fab fa-typo3 ml-3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {!userLoginContext && 
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            }
            {userLoginContext ? 
              click ||
              <Link to="/userprofile">
                <img
                  src="/images/img-1.jpg"
                  alt="User Profile"
                  id="userIcon"
                  className="self-center w-12 h-12 rounded-full ring-2 ring-white hover:ring-4  hover:ring-green-500"
                />
              </Link>
             : 
              button && <Button buttonStyle="btn--outline">Log in</Button>
            }
            {userLoginContext} {
              click ||
              <li id="logOut" className="btn--outline w-20 py-2 ml-4 text-lg bg-white rounded-xl text-center cursor-pointer" >
                LOG OUT
              </li>
            }
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
