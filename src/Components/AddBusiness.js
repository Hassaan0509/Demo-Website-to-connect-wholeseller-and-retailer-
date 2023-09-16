import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../State";

export default function AddBusiness() {
  let option = [];
  let business = [];
  let temp = "";
  const [value, setValue] = useState("");
  const [tempVar, setTempVar] = useState(null);
  const [arr, setArr] = useState(option);

  const businessCategories = useSelector((state) => state.BusinessOption);
  const dispatch = useDispatch();
  const { setBusinessCategories } = bindActionCreators(actionCreator, dispatch);
  const [businessName, setBusinessName] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  return (
    <>
      <div className="bg-success w-100">
        <div className="d-flex align-items-center py-4 text-light">
          <ArrowForwardIosIcon className="header-icon" />
          <h1 className="header-item">Add Business</h1>
          <ArrowBackIosNewIcon className="header-icon" />
        </div>
      </div>

      <div className="w-50 m-auto mt-5">
        <div className="input-group mb-3 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Add Category"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            required
            onChange={(e) => {
              e.target.value === ""
                ? setBusinessName(null)
                : setBusinessName(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            disabled={businessName === null ? true : false}
            onClick={() => {
              temp = { bname: businessName, sub: [] };
              business = [...businessCategories];
              setBusinessCategories([...business, temp]);
              option = [...arr];
              setArr([...option, businessName]);
            }}
          >
            Add
          </button>
        </div>

        <div className="mt-4 mb-2">
          <label>Select Category</label>
          <select
            className="form-select my-1"
            aria-label="Default select example"
            onChange={(e) => setTempVar(e.target.value)}
          >
            <option>Open this select menu</option>
            {arr.map((element) => {
              return <option key={element}>{element}</option>;
            })}
          </select>
        </div>

        <div className="input-group mb-3 col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Sub Category"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              e.target.value === ""
                ? setSubCategory(null)
                : setSubCategory(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            disabled={subCategory === null ? true : false}
            onClick={() => {
              setValue("");
              businessCategories.map((element) =>
                element.bname === tempVar
                  ? (element.sub[element.sub.length] = subCategory)
                  : null
              );
              console.log(businessCategories);
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="container w-100">
        <h1>Businesses Details</h1>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          {businessCategories.map((element) => {
            return (
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed list-group-item-primary list-group-item-action"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${element.bname}`}
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    {element.bname}
                  </button>
                </h2>
                <div
                  id={element.bname}
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body p-0">
                    <ul className="list-group list-group-flush">
                      {element.sub.map((element) => {
                        return (
                          <li className="list-group-item list-group-item-success list-group-item-action">
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
