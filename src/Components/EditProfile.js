import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { actionCreator } from "../State/index";
import { bindActionCreators } from "redux";
import "../css/signup.css";
import { Navigate } from "react-router-dom";
import CardProfile from "./image";

export default function EditProfile() {
  const [submit, setSubmit] = useState(false);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { profileData } = bindActionCreators(actionCreator, dispatch);
  const dataProfile = useSelector((state) => state.dataProfile);

  const data = {
    image: dataProfile.image,
    name: dataProfile.name,
    surname: dataProfile.surname,
    mobile: dataProfile.mobile,
    addressLine1: dataProfile.addressLine1,
    addressLine2: dataProfile.addressLine2,
    postalCode: dataProfile.postalCode,
    state: dataProfile.state,
    area: dataProfile.area,
    email: dataProfile.email,
    education: dataProfile.education,
    country: dataProfile.country,
    region: dataProfile.region,
  };

  return (
    <>
      <div className={`rounded bg-${mode === "dark" ? "dark" : "light"}`}>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <div className="position-relative">
                <CardProfile />
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
                  Edit Profile
                </h4>
              </div>

              {submit === true ? (
                <Navigate to="/Profile" replacee="true" />
              ) : null}
              <form
                className="needs-validation"
                onSubmit={() => {
                  setSubmit(true);
                  profileData(data);
                  console.log(dataProfile);
                }}
              >
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label
                      htmlFor="validationCustom01"
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
                      id="validationCustom01"
                      value={dataProfile.name}
                      required
                      onChange={(e) => {
                        data.name = e.target.value;
                        profileData(data);
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
                      value={dataProfile.surname}
                      required
                      onChange={(e) => {
                        data.surname = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.mobile}
                      required
                      onChange={(e) => {
                        data.mobile = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.addressLine1}
                      required
                      onChange={(e) => {
                        data.addressLine1 = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.addressLine2}
                      required
                      onChange={(e) => {
                        data.addressLine2 = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Postcode
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Postal Code"
                      value={dataProfile.postalCode}
                      required
                      onChange={(e) => {
                        data.postalCode = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.state}
                      required
                      onChange={(e) => {
                        data.state = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.area}
                      required
                      onChange={(e) => {
                        data.area = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.email}
                      required
                      onChange={(e) => {
                        data.email = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
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
                      value={dataProfile.education}
                      required
                      onChange={(e) => {
                        data.education = e.target.value;
                        profileData(data);
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
                      value={dataProfile}
                      required
                      onChange={(e) => {
                        data.country = e.target.value;
                        profileData(data.country);
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
                      value={dataProfile.region}
                      required
                      onChange={(e) => {
                        data.region = e.target.value;
                        profileData(data);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
