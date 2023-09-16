import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { actionCreator } from "../State/index";
import { bindActionCreators } from "redux";
import "../css/signup.css";

export default function Signup() {
  const mode = useSelector((state) => state.mode);
  const images = useSelector((state) => state.changeImage);
  const dispatch = useDispatch();
  const { image } = bindActionCreators(actionCreator, dispatch);
  const { profileData } = bindActionCreators(actionCreator, dispatch);

  const data = {
    Name: "",
    surname: "",
    mobile: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
    state: "",
    area: "",
    email: "",
    education: "",
    country: "",
    region: "",
  };
  return (
    <>
      <div className={`rounded bg-${mode === "dark" ? "dark" : "light"}`}>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <div className="position-relative">
                <img className="mt-5" width="250px" src={images} alt="" />
                <input
                  className="btn btn-secondary change"
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    image(e.target.value);
                  }}
                />
              </div>
              <span
                className={`font-weight-bold text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Name
              </span>
              <span
                className={`text-${mode === "light" ? "black-50" : "white-50"}`}
              >
                Wholeseller/retailer/admin
              </span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-7 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4
                  className={`text-right text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Sign up
                </h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    onChange={(e) => {
                      data.Name = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="surname"
                    onChange={(e) => {
                      data.surname = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    onChange={(e) => {
                      data.mobile = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    onChange={(e) => {
                      data.addressLine1 = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    onChange={(e) => {
                      data.addressLine2 = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postal Code"
                    onChange={(e) => {
                      data.postalCode = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    onChange={(e) => {
                      data.state = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Area
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Area"
                    onChange={(e) => {
                      data.area = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Email ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    onChange={(e) => {
                      data.email = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-12">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Education
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="education"
                    onChange={(e) => {
                      data.education = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    onChange={(e) => {
                      data.country = e.target.value;
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    className={`labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    State/Region
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="state"
                    onChange={(e) => {
                      data.region = e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={profileData(data)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
