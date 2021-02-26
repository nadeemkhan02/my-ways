import React from "react";
import Navbar from "./Navbar";
import Success from "../Images/success.png";

const Home = () => {
  const onclick= ()=>{
    document.getElementById("close").click()
  }
  const signupClick= ()=>{
    document.getElementById("signup").click()
  }
  return (
    <>
      <Navbar />
      <div style={{ textAlign:"center", width:"70%", margin:"0 auto", marginTop:"10%" }}>
        <p id="topHeading" style={{ fontSize: "41px" }}>
          <b>Apply and hear back every time.</b>
        </p>
        <p id="tagHeading" style={{ fontSize: "28px" }}>
          Exploring internships or jobs? Say good-bye to the typical job portals
          and use the power of Artificial Intelligence to become successful,
          faster.
        </p>
        <button
          style={{
            borderRadius: "40px",
            border: "none",
            marginTop: "20px",
            backgroundColor: "#7ECB20",
            width: "236px",
            height: "53px",
            marginBottom:"20px"
          }}
          className="btn btn-success"
          data-toggle="modal"
          data-target="#exampleModalCenter1"
        >
          Get's Started
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div style={{ border: "none" }} class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle"></h5>
              <button
                id="close"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="form" style={{ width: "90%", margin: "auto" }}>
                <h3 style={{ marginBottom: "10px" }}>Login</h3>
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "10px",
                    padding: "30px",
                  }}
                >
                  <h5
                    style={{
                      borderBottom: "2px solid green",
                      textAlign: "center",
                      color: "green",
                      margin: "40px 0px",
                    }}
                  >
                    Student
                  </h5>

                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <p style={{ color: "green", float: "right" }}>
                    Forgot Password?
                  </p>
                  <button
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                    type="submit"
                    class="btn btn-success">
                    Login
                  </button>
                  <p style={{textDecoration:"none",fontStyle:"Segoe UI",fontSize:"15px", cursor:"pointer", color:"#000000",textAlign:"center"}} onClick={onclick} data-toggle="modal" data-target="#exampleModalCenter1">New to MyWays? Sign Up here</p>
                </div>
                
              </form>
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
   



      <div
        class="modal fade"
        id="exampleModalCenter1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div style={{ border: "none" }} class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle"></h5>
              <button
                id="signup"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                id="form"
                style={{ width: "80%", margin: "auto", marginTop: "10%" }}
              >
                <div style={{ marginBottom: "40px", textAlign: "center" }}>
                  <h3>Sign Up</h3>
                  <h5>it's quik and easy</h5>
                </div>
                <div style={{ marginBottom: "14px" }} class="row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button
                  onClick={signupClick}
                  style={{ marginTop: "5px", width: "100%" }}
                  type="button"
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModalCenter2"
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
      

      <div
        class="modal fade"
        id="exampleModalCenter2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div style={{ border: "none" }} class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle"></h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <img style={{display:"block", marginLeft:"auto", marginRight:"auto", width:"50px"}} src={Success} alt="success" />
                 <h3 style={{textAlign:"center"}}>Thanks, Successful</h3>         
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
