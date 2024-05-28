import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useUserContext from "../UserContext";



const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { loggedIn, logout } = useUserContext();

  const showLoginOptions = () => {
    if (currentUser !== null || loggedIn) {
      return (
        <>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout} >Logout</button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>


          <li className="nav-item">
            <NavLink className="nav-link" to="/Signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/Addplaces">
              Add Places
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Browselocation">
              Browse Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contactus">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Aboutus">
              About us
            </NavLink>
          </li>


        </>
      );
    }
  };

  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span>Rentify.com</span>

        </a>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Rentify

            </a>
          </div>
        </nav>
        <button
          className="navbar-toggler"

          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>



            {showLoginOptions()}
          </ul>
          {/* use ms auto */}
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="text" placeholder="Search">
          </input>
          <button class="btn btn-primary" type="button">Search</button>
        </form>


      </div>
    </div>
  );
};

export default Navbar;