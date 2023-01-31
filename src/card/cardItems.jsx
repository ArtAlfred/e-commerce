import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cart from "../card/cart";
import Footer from "../components/footer";
import Header from "../components/header";
import Sports, { newArrival } from "../data";

const CardItems = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header />
      <Cart />
      <div className="page container mt-5">
        <div className="d-flex justify-content-center"></div>
        <div className="card--item--title">
          <h1
            className="fw-bolder text-center"
            style={{
              fontSize: "4rem",
              fontFamily: "italic",
              marginTop: "8rem",
            }}
          >
            {props.title}
          </h1>
          <div className="w-100 d-flex justify-content-center">
            <p className="fs-3 text-center mt-5 w-75">{props.description}</p>
          </div>
        </div>

        <div
          className="back--home d-flex align-items-center gap-4"
          style={{ marginTop: "6rem" }}
        >
          <button
            onClick={goBack}
            className="fs-5 fw-bold d-flex gap-4 align-items-center text-decoration-underline"
          >
            <ion-icon name="arrow-back-outline"></ion-icon> BACK
          </button>

          <Link to="/">
            <button className="fs-5 text-decoration-underline text-muted">
              Home
            </button>
          </Link>
        </div>

        <div className="card--item--box row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-5 gy-5 mt-1">
          {props.items.map((item) => {
            return (
              <a key={item.id} href={item.url}>
                <div className="box col">
                  <div className="box__item">
                    <img src={item.img} alt="women" />
                  </div>

                  <h1 className="fs-3 mt-3 text-center fw-normal roboto">
                    {item.name} - ${item.price}
                  </h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardItems;
