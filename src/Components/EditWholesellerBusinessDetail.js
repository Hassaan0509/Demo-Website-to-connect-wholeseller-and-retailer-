import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreator } from "../State/index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux/es/exports";
import CardProfile from "./image";

export default function EditWholesellerBusinessDetail() {
  const [submit, setSubmit] = useState(false);
  const [temp, setTemp] = useState(null);
  const mode = useSelector((state) => state.mode);
  const businessOption = useSelector((state) => state.BusinessOption);
  const wholeseller = useSelector((state) => state.WholesellerBusinessDetails);
  const dispatch = useDispatch();
  const { WholesellerBusinessDetails } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const data = {
    image: wholeseller.image,
    name: wholeseller.name,
    businessTitle: wholeseller.businessTitle,
    personalContact: wholeseller.personalContact,
    businessContact: wholeseller.businessContact,
    businessAddress1: wholeseller.businessAddress1,
    businessAddress2: wholeseller.businessAddress2,
    postCode: wholeseller.postCode,
    state: wholeseller.state,
    area: wholeseller.area,
    email: wholeseller.email,
    country: wholeseller.country,
    region: wholeseller.region,
    businessCategory: wholeseller.businessCategory,
    businessSubCategory: wholeseller.businessSubCategory,
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
                className={`font-weight-bold mt-1 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                {wholeseller.businessTitle}
              </span>
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
                  Edit Business Details
                </h4>
              </div>
              {submit === true ? (
                <Navigate to="/WholesellerBusinessDetail" replace="true" />
              ) : null}
              <form
                onSubmit={() => {
                  setSubmit(true);
                  WholesellerBusinessDetails(data);
                }}
              >
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Owner's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      value={wholeseller.name}
                      required
                      onChange={(e) => {
                        data.name = e.target.value;
                        WholesellerBusinessDetails(data);
                        console.log(wholeseller);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Business Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Business Title"
                      value={wholeseller.businessTitle}
                      required
                      onChange={(e) => {
                        data.businessTitle = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Personal Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value={wholeseller.personalContact}
                      required
                      onChange={(e) => {
                        data.personalContact = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>

                  <div className="col-md-6 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Business Mobile
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value={wholeseller.businessContact}
                      required
                      onChange={(e) => {
                        data.businessContact = e.target.value;
                        WholesellerBusinessDetails(data);
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>

                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Business Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value={wholeseller.businessAddress1}
                      required
                      onChange={(e) => {
                        data.businessAddress1 = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Business Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value={wholeseller.businessAddress2}
                      required
                      onChange={(e) => {
                        data.businessAddress2 = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Postcode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postal Code"
                      value={wholeseller.postCode}
                      required
                      onChange={(e) => {
                        data.postCode = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      value={wholeseller.state}
                      required
                      onChange={(e) => {
                        data.state = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Area
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area"
                      value={wholeseller.area}
                      required
                      onChange={(e) => {
                        data.area = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Email ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      value={wholeseller.email}
                      required
                      onChange={(e) => {
                        data.email = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      value={wholeseller.country}
                      required
                      onChange={(e) => {
                        data.country = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      State/Region
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="state"
                      value={wholeseller.region}
                      required
                      onChange={(e) => {
                        data.region = e.target.value;
                        WholesellerBusinessDetails(data);
                      }}
                    />
                  </div>
                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Business Category
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      defaultValue="0"
                      // value={wholeseller.businessCategory}
                      required
                      onChange={(e) => {
                        data.businessCategory = e.target.value;
                        WholesellerBusinessDetails(data);
                        setTemp(e.target.value);
                      }}
                    >
                      <option>Open this select menu</option>
                      {businessOption &&
                        businessOption.map((element) => {
                          return (
                            <option key={element.bname} value={element.bname}>
                              {element.bname}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div className="col-md-12 mt-2">
                    <label
                      className={`labels fw-semibold text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      Sub Category
                    </label>
                    <div className="row justify-content-around">
                      {businessOption &&
                        businessOption.map((element) => {
                          return element.bname === temp
                            ? element.sub.map((element) => {
                                return (
                                  <>
                                    <div
                                      key={element}
                                      className="form-check col-md-5"
                                    >
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={element}
                                        id={element}
                                        onChange={(e) => {
                                          data.businessSubCategory.includes(
                                            e.target.value
                                          )
                                            ? (data.businessSubCategory =
                                                data.businessSubCategory.filter(
                                                  (num) =>
                                                    num !== e.target.value
                                                ))
                                            : data.businessSubCategory.push(
                                                e.target.value
                                              );
                                          WholesellerBusinessDetails(data);
                                          console.log(
                                            wholeseller.businessSubCategory
                                          );
                                          console.log(data.businessSubCategory);
                                        }}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor={element}
                                      >
                                        {element}
                                      </label>
                                    </div>
                                  </>
                                );
                              })
                            : null;
                        })}
                    </div>
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
