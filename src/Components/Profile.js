import React from "react";
import "../css/profile.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const mode = useSelector((state) => state.mode);
  const profileData = useSelector((state) => state.dataProfile);
  const view = useSelector((state) => state.view);

  return (
    <>
      <div className={`rounded bg-${mode === "dark" ? "dark" : "light"}`}>
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="mt-5"
                width="250px"
                src={profileData.image}
                alt=""
              />
              <span
                className={`fw-semibold my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                {profileData.name}
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
                <h2
                  className={`text-right text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Profile
                </h2>
                {view === "admin" ? null : (
                  <Link className="btn btn-primary" to="/EditProfile">
                    Edit
                  </Link>
                )}
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Name
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.name}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Surname
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.surname}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Mobile Number
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.mobile}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Address Line 1
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.addressLine1}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Address Line 2
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.addressLine2}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Postcode
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.postalCode}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    State
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.state}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Area
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.area}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Email ID
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.email}</p>
                  </div>
                </div>
                <div className="col-md-12 mt-2">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Education
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.education}</p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Country
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.country}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    className={`fw-semibold labels text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  >
                    State/Region
                  </label>
                  <div className="border-bottom mb-2">
                    <p className="mb-1 mt-2">{profileData.region}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
