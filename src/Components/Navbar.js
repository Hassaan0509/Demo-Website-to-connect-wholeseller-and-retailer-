import React from "react";
import "../css/navbar.css";
import logo from "../logo.svg";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { actionCreator } from "../State/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { darkMode, lightMode } = bindActionCreators(actionCreator, dispatch);

  return (
    <>
      <nav
        className={`sticky-top w-100 navbar navbar-expand-lg bg-${mode} text-${
          mode === "light" ? "dark" : "light"
        }`}
        id="navbar"
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand fs-2 mx-3 text-${
              mode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            Navbar
          </Link>

          <div
            className="collapse navbar-collapse row justify-content-around fs-5 mx-4"
            id="navbarSupportedContent"
          >
            <div className=" col-md-5 mt-1">
              <div className="mx-5">
                <form className="d-flex mx-3" role="search">
                  <input
                    className={`form-control me-2 bg-${mode} text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <SearchIcon
                    className={`searchIcon text-${
                      mode === "dark" ? "success" : "dark"
                    }`}
                    type="submit"
                  />
                </form>
              </div>
            </div>
            <ul className="navbar-nav me-auto justify-content-end mb-2 mb-lg-0 col-md-4">
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown mx-2">
                <Link
                  className={`nav-link dropdown-toggle text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul
                  className={`dropdown-menu bg-${mode} text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  <li>
                    <Link
                      className={`dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`bg-${mode} dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`bg-${mode} dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className={`bg-${mode} dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex col-md-3 align-items-center justify-content-between">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {
                    mode === "light" ? darkMode("dark") : lightMode("light");
                  }}
                />
                <label
                  className={`form-check-label text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  dark mode
                </label>
              </div>
              <img
                src={logo}
                className="border border-second rounded-circle img-size"
                alt="Not found"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
