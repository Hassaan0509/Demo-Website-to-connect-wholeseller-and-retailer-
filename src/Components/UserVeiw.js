import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Navigate } from "react-router-dom";
import "../css/UserView.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../State";

export default function UserVeiw() {
  const [flag, setFlag] = useState(false);
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const { search } = bindActionCreators(actionCreator, dispatch);
  const searchData = useSelector((state) => state.searchResult);
  const data = {
    category: "",
    sub: "",
    location: "",
  };
  return (
    <>
      <div className="row justify-content-center w-100 main-container">
        <div className="col-md-11 h-100" style={{ backgroundColor: "#C2C2C2" }}>
          <div className="row justify-content-center">
            <div className="col-md-11 my-5 back">
              <div className="col-md-12">
                <header className="bg-transparent" style={{ height: "220px" }}>
                  <nav className={`w-100 navbar navbar-expand-lg`} id="navbar">
                    <div className="container-fluid">
                      <Link className={`navbar-brand fs-2 mx-3`} to="/">
                        Mandi wala
                      </Link>

                      <div
                        className="collapse navbar-collapse row justify-content-around fs-5 mx-4"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav me-auto justify-content-start mb-2 mb-lg-0 col-md-9">
                          <li className="nav-item">
                            <Link
                              className={`nav-link mx-2 `}
                              aria-current="page"
                              to="/"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className={`nav-link mx-2 `}
                              aria-current="page"
                              to="/"
                            >
                              About
                            </Link>
                          </li>
                        </ul>
                        <div className="d-flex col-md-3 align-items-center justify-content-end">
                          <Link to="/SignUp" className="btn btn-dark mx-1">
                            Sign Up
                          </Link>
                          <Link to="/Login" className="btn btn-dark mx-1">
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
              <div className="row position-relative">
                <div className="col-md-8 index">
                  <h1 className="mx-3">
                    Place to make your Business at next Level
                  </h1>
                  <p className="w-75 mx-3">
                    We will you to get orders and make your Business bigger
                  </p>
                  {submit === true ? (
                    <Navigate to="/ResultList" replace={true} />
                  ) : null}
                  <form
                    onSubmit={() => {
                      setSubmit(true);
                    }}
                  >
                    <div className="input-group rounded">
                      <input
                        type="search"
                        className="form-control rounded mx-1 px-1"
                        placeholder="Category"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => {
                          data.category = e.target.value;
                          setFlag(true);
                        }}
                      />
                      <input
                        type="search"
                        className="form-control rounded mx-1 px-1"
                        placeholder="Sub Category"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => {
                          data.sub = e.target.value;
                          setFlag(true);
                        }}
                      />
                      <input
                        type="search"
                        className="form-control rounded mx-1 px-1"
                        placeholder="Location"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={(e) => {
                          data.location = e.target.value;
                          setFlag(true);
                        }}
                      />

                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        <button
                          to="/ResultList"
                          type="submit"
                          className="input-group-text border-0"
                          disabled={flag === false ? true : false}
                          id="search-addon"
                          onClick={() => {
                            search(data);
                            console.log(searchData);
                          }}
                        >
                          <SearchIcon />
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 position-absolute position">
                  <img
                    className="w-75 rounded-3"
                    style={{ height: "350px" }}
                    src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYXJjaCUyMGVuZ2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
