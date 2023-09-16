import React from "react";
import { ResultData } from "./ResultData";
import "../css/Card.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card() {
  const user = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <>
      {ResultData.map((element) => {
        return (
          <div className="col-md-3" key={element.onwerImage}>
            <div className="padding">
              <div className="col-md-12">
                <div className="card">
                  {" "}
                  <img
                    className="card-img-top"
                    src={element.businessImage}
                    alt="Business pic"
                  />
                  <div className="card-body little-profile text-center">
                    <div className="pro-img">
                      <img src={element.onwerImage} alt="user" />
                    </div>
                    <h3 className="m-b-0 m-0">Brad Macullam</h3>
                    <p className="m-0">{element.name}</p>{" "}
                    <Link
                      to="/"
                      className="m-t-10 waves-effect waves-dark btn btn-primary btn-rounded"
                      data-abc="true"
                    >
                      View Profile
                    </Link>
                    <div className="row text-center m-t-10">
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h5 className="m-b-0 font-light">
                          {element.noOfOrders}
                        </h5>
                        <small>Orders</small>
                      </div>
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h5 className="m-b-0 font-light">
                          {element.noOfProducts}
                        </h5>
                        <small>Products</small>
                      </div>
                      <div className="col-lg-4 col-md-4 m-t-20">
                        <h5 className="m-b-0 font-light">{element.ratings}</h5>
                        <small>Ratings</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
