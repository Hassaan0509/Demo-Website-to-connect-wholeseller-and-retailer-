import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WholesellerBusinessDetail() {
  const view = useSelector((state) => state.view);
  const mode = useSelector((state) => state.mode);
  const image = useSelector((state) => state.changeImage);
  const WholesellerData = useSelector(
    (state) => state.WholesellerBusinessDetails
  );

  return (
    <div className={`rounded bg-${mode === "dark" ? "dark" : "light"}`}>
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="mt-5" width="250px" src={image} alt="" />
            <span
              className={`fw-semibold my-2 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              {WholesellerData.businessTitle}
            </span>
            <span
              className={`text-${mode === "light" ? "black-50" : "white-50"}`}
            >
              Wholeseller/retailer/admin
            </span>
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
                Business Details
              </h2>
              {view === "wholeseller" ? (
                <Link
                  to="/EditWholesellerBusinessDetail"
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              ) : null}
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Owner's Name
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.name}</p>
                </div>
              </div>
              <div className="col-md-6">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Business Title
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.businessTitle}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Personal Contact
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.personalContact}</p>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Business Mobile
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.businessContact}</p>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Business Address
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">
                    {WholesellerData.businessAddress1}
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Business Address 2
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">
                    {WholesellerData.businessAddress2}
                  </p>
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
                  <p className="mb-1 mt-2">{WholesellerData.postCode}</p>
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
                  <p className="mb-1 mt-2">{WholesellerData.state}</p>
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
                  <p className="mb-1 mt-2">{WholesellerData.area}</p>
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
                  <p className="mb-1 mt-2">{WholesellerData.email}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  Country
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.country}</p>
                </div>
              </div>
              <div className="col-md-6 mt-2">
                <label
                  className={`fw-semibold labels text-${
                    mode === "light" ? "dark" : "light"
                  }`}
                >
                  State/Region
                </label>
                <div className="border-bottom mb-2">
                  <p className="mb-1 mt-2">{WholesellerData.region}</p>
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
                  Business Category
                </label>
                <div className="mb-2">
                  <p className="mb-1 mt-2">
                    {WholesellerData.businessCategory}
                  </p>
                </div>
                <ul className="w-50">
                  {WholesellerData.businessSubCategory.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
