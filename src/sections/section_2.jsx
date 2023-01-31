import React, { useState } from "react";
import Sports from "../data";

const Section_2 = () => {
  return (
    <section className="section--2 position-relative">
      <div className="w-100" style={{ padding: "0rem 4rem" }}>
        <div className="section--2__secure row px-5">
          <div
            className="section--2__secure__box col-sm overflow-hidden"
            style={{ height: "18rem" }}
          >
            <center>
              <img
                className="section2--img"
                src="/img/section_2/fast-delivery.png"
                alt="delivery"
              />
            </center>
            <h1 className="fs-2 text-center">EXPRESS DELIVERY</h1>
            <h4
              className="fs-4 text-center"
              style={{ marginTop: "-.5rem", fontWeight: "400" }}
            >
              Delivery anywhere in UK within 5days.
            </h4>
          </div>
          <div
            className="section--2__secure__box col-sm overflow-hidden"
            style={{ height: "18rem" }}
          >
            <center>
              <img
                className="section2--img"
                src="/img/section_2/credit-card.png"
                alt="delivery"
              />
            </center>
            <h1 className="fs-2 text-center">100% SECURE</h1>
            <h4
              className="fs-4 text-center"
              style={{ marginTop: "-.5rem", fontWeight: "400" }}
            >
              Safe and secure online shopping.
            </h4>
          </div>
          <div
            className="section--2__secure__box col-sm overflow-hidden"
            style={{ height: "18rem" }}
          >
            <center>
              <img
                className="section2--img"
                src="/img/section_2/guarantee-certificate.png"
                alt="delivery"
              />
            </center>
            <h1 className="fs-2 text-center">GUARANTEED</h1>
            <h4
              className="fs-4 text-center"
              style={{ marginTop: "-.5rem", fontWeight: "400" }}
            >
              In compliance with the standards of traditional glove making.
            </h4>
          </div>
        </div>
      </div>

      <div
        className="section--2__desc overflow-hidden d-flex justify-content-center position-relative"
        style={{ height: "40rem" }}
      >
        <img
          className="image-cover"
          src="/img/section_2/3.svg"
          alt="section_2_img"
          style={{ filter: "brightness(70%)" }}
        />
        <div className="position-absolute top-50 translate-middle start-50">
          <h6 className="fs-2 text-light text-center">THE LATEST ARRIVALS</h6>
          <p className="fs-4 text-light text-center mt-3">
            An everyday collection, for users of electric bikes or scooters.
            Designed with reinforced seams, reinforcement patches and cotton
            crochet top. You'll move around in comfort and style!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
