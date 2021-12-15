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
  const userLogOut = (e)=> {e.preventDefault(); 
    setUserLoginContext(true);
    console.log(`click${userLoginContext} `);}

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


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo mb-3" onClick={closeMobileMenu}>
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
                  Log in
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
                  className="self-center w-14 h-14 rounded-full ring-2   ring-green-400 "
                />
              </Link>
             : 
              button && <Button buttonStyle="btn--outline">Log in</Button>
            }
            {!userLoginContext ||
              <button id="logOut"
              onClick={userLogOut}
              className="btn--outline w-20 h-12 py-2 mt-1 ml-4 text-lg bg-white rounded-xl text-center cursor-pointer" >
                LOG OUT
              </button>
            }
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
