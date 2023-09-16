import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ResultData } from "./ResultData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../State";

export default function ResultList() {
  const mode = useSelector((state) => state.mode);
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
      <div className="position-relative mt-5 row w-75 m-auto">
        <div className="input-group rounded mb-5">
          <input
            type="search"
            className="form-control rounded mx-1 px-1"
            placeholder="Category"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => {
              data.category = e.target.value;
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
            }}
          />

          <span className="input-group-text border-0" id="search-addon">
            <button
              type="submit"
              className="input-group-text border-0"
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
      </div>

      <div className="position-relative mt-5 row w-75 m-auto">
        <div className="col-md-3 rounded-4 border border-light border-1 shadow-lg">
          <div className="w-75">
            <h5 className="fw-semibold mt-3">Filter by</h5>
            <div>
              <h5>Ratings</h5>
              <ul style={{ listStyleType: "none" }} className="p-0">
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="5"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      5
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="4"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      4
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="3"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      3
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="2"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      2
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      1
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          .
        </div>

        <div className="col-md-9">
          {ResultData.map((element) => {
            return (
              <Link
                to="/Profile"
                className={`text-${mode === "dark" ? "light" : "dark"}`}
                style={{ color: "rgb(33, 37, 41)" }}
              >
                <div className="">
                  <div
                    className="row justify-content-around fw-semibold fs-6 wholeseller__Data"
                    key={element.mobile}
                  >
                    <div className="col-md-3">
                      <img
                        src={element.onwerImage}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div
                        className="mt-1 fw-bold"
                        style={{ fontFamily: "'Aboreto', cursive" }}
                      >
                        {element.title}
                      </div>
                      <div className="mb-4 text-secondary">
                        {element.location}
                      </div>
                      <div className="mt-5">{element.name}</div>

                      <div style={{ height: "39px" }}>
                        <p className="mb-0 w-100 h-100 fw-light fs-6">
                          {element.description}
                        </p>
                      </div>
                      <div className="fs-3">
                        {element.ratings}
                        <span className="fs-5">/5</span>
                      </div>
                    </div>

                    <div className="col-md-3 align-self-end justify-content-end">
                      <div>
                        <h5>Contact</h5>
                        <div>{element.mobile}</div>
                        <div>{element.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ top: "0", right: "0" }}
                  className={`position-absolute d-inline p-1 fw-semibold rounded-4 text-bg-${
                    element.verify === true ? "success" : "danger"
                  }`}
                >
                  {element.verify === true ? "Verified" : "Not Verified"}
                </div>
                <hr className="m-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
