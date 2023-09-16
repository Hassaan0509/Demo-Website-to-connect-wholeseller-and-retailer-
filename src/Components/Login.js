import React, { useState } from "react";
import "../css/login.css";
import { Link, Navigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import { login } from "../utilis";

export default function Login() {
  const [logIn, setLogin] = useState(false);
  const handleLogin = () => {
    login();
    setLogin(true);
  };

  return (
    <>
      {logIn ? <Navigate to="/Dashboard" replace={true} /> : null}
      <div
        className="position-fixed w-50
      index1 rounded-4 element"
        id="loginPage"
      >
        <div className="row">
          <div className="col-md-12 rounded-4">
            <div className="row justify-content-around">
              <div className="col-md-10">
                <h4 className="pt-3 px-4 fw-bold fst-italic fs-1">Log In</h4>
              </div>
            </div>

            <form
              className="text-center border border-light p-5"
              onSubmit={() => handleLogin()}
            >
              <input
                type="email"
                id="defaultLoginFormEmail"
                className="form-control
              mb-4"
                placeholder="E-mail"
                required
              />

              <input
                type="password"
                id="defaultLoginFormPassword"
                className="form-control mb-4"
                placeholder="Password"
                required
              />

              <div className="d-flex justify-content-around">
                <div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input mx-1"
                      id="defaultLoginFormRemember"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="defaultLoginFormRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <Link to="/">Forgot password?</Link>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-info btn-block my-4" type="submit">
                  Log in
                </button>
              </div>

              <p>
                Not a member?
                <Link to="/SignUp">Register</Link>
              </p>

              <p>or sign in with:</p>

              <Link to="/" className="mx-2" role="button">
                <FacebookRoundedIcon />
              </Link>
              <Link to="/" className="mx-2 text-success" role="button">
                <GoogleIcon />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
