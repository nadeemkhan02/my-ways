import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import logo from "../Images/logo.png";
import power from "../Images/power.png";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <nav
        id="navbar"
        style={{
          backgroundColor:"white",
          width: "90%",
          margin: "auto",
          height: "70x",
          boxShadow: " 0px 3px 6px rgba(0,0,0,.2)",
        }}
        class="navbar navbar-expand-lg navbar-light bg-light"
      >
        <a class="navbar-brand" href="/#">
          <img style={{ width: "50px", marginLeft:"20px" }} src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul style={{marginRight:"80px", paddingLeft:"20px"}} class="navbar-nav ml-auto">
            <li class="nav-item dropdown" >
              <a
                style={{ fontSize: "17px"}}
                class="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                For you
              </a>
              <div
              style={{ border:"none", marginTop:"14px"}}
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a style={{ fontSize: "17px" }} class="dropdown-item" href="/#">
                  Find matching internships
                </a>
                <a style={{ fontSize: "17px" }} class="dropdown-item" href="/#">
                  Hire right talent
                </a>
                <a style={{ fontSize: "17px" }} class="dropdown-item" href="/#">
                  work from home
                </a>
              </div>
            </li>
            <li class="nav-item active">
              <a style={{ fontSize: "17px" }} class="nav-link" href="/#">
                <img style={{ width: "25px" }} src={power} alt="power" />
                Instant apply <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a style={{ fontSize: "17px" }} class="nav-link" href="/#">
                Pricing
              </a>
            </li>
            <li class="nav-item active">
              <a style={{ fontSize: "17px" }} class="nav-link" href="/#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a
                style={{ fontSize: "17px", color: "#7ECB20" }}
                class="nav-link"
                href="/#"
                data-toggle="modal"
                data-target="#exampleModalCenter1"
              >
                Sign Up
              </a>
            </li>
            <div class="form-inline my-2 my-lg-0">
            <button
              style={{
                border: "none",
                color:"white",
                borderRadius: "40px",
                padding: "7px 42px",
                fontSize: "15px",
                backgroundColor: "#7ECB20",
                transition: "0.5s",
              }}
              id="LoginButton"
              type="button"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
          </div>
          </ul>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
