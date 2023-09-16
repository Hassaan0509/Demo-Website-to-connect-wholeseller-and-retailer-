import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import "../css/wholeseller.css";
import { bindActionCreators } from "redux";
import { actionCreator } from "../State";

export default function Wholeseller() {
  const mode = useSelector((state) => state.mode);
  const wholesellerData = useSelector((state) => state.wholesellerData);
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [temp, setTemp] = useState(null);
  const dispatch = useDispatch();
  const { wholeseller__Data } = bindActionCreators(actionCreator, dispatch);
  return (
    <>
      {confirmMessage ? (
        <div
          className="position-fixed w-25
      index2 rounded element"
        >
          <div className="pb-5 shadow-lg ">
            <div className="bg-info rounded-top row justify-content-between">
              <p className="p-2 fw-semibold col-md-2">Warning</p>
              <div className="col-md-1 p-2">
                <CancelIcon
                  className="del_icon"
                  onClick={() => {
                    setConfirmMessage(false);
                  }}
                />
              </div>
            </div>
            <div className="mx-5 mt-5 mb-2">
              <p>Are you sure you want to delete this wholeseller?</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mx-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setConfirmMessage(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-4 mx-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    wholeseller__Data(
                      wholesellerData.filter((obj) => obj !== temp)
                    );
                    setConfirmMessage(false);
                    console.log(wholesellerData);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={`bg-${mode === "light" ? "light" : "dark"} text-${
          mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="bg-success w-100">
          <div className="d-flex align-items-center py-4 text-light">
            <ArrowForwardIosIcon className="header-icon" />
            <h1 className="header-item">Whole Sellers</h1>
            <ArrowBackIosNewIcon className="header-icon" />
          </div>
        </div>

        <div
          className="row justify-content-around fw-semibold fs-4 mt-4 py-1"
          style={{ backgroundColor: "rgba(128,128,126,0.3)" }}
        >
          <div className="col-md-2">Name</div>
          <div className="col-md-2">Email</div>
          <div className="col-md-2">Business Category</div>
          <div className="col-md-2">Verified/Not Verfied</div>
          <div className="col-md-2">Mobile</div>
        </div>

        {wholesellerData.map((element) => {
          return (
            <>
              <div
                className="row fw-semibold fs-6 pt-3 pb-1 wholeseller__Data position-relative"
                key={element.key}
              >
                <Link
                  to={element.link}
                  className={`col-md-12 row justify-content-around text-${
                    mode === "dark" ? "light" : "dark"
                  }`}
                  style={{ color: "rgb(33, 37, 41)" }}
                >
                  <div className="col-md-2">{element.name}</div>
                  <div className="col-md-2">{element.email}</div>
                  <div className="col-md-2">{element.business}</div>
                  <div className="col-md-2">
                    <div
                      className={`rounded-circle bg-success mx-auto text-center text-white bg-${
                        element.verify === true ? "success" : "danger"
                      }`}
                      style={{ width: "15%" }}
                    >
                      {element.verify === true ? <DoneIcon /> : <CloseIcon />}
                    </div>
                  </div>
                  <div className="col-md-2">{element.mobile}</div>
                </Link>
                <div
                  className="position-absolute del__icon"
                  onClick={() => {
                    setConfirmMessage(true);
                    setTemp(element);
                    // wholeseller__Data(
                    //   wholesellerData.filter((obj) => obj !== element)
                    // );
                    // console.log(wholesellerData);
                  }}
                >
                  <CancelIcon />
                </div>
              </div>

              <hr className="m-0" />
            </>
          );
        })}
      </div>
    </>
  );
}
