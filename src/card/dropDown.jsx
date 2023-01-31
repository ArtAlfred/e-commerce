import React, { useState } from "react";
import Sports, { kidData, menData, womenData } from "../data";

const WomenDropDown = (props) => {
  return (
    <div
      className="text-light position-absolute border-top header--item header--item--women"
      onMouseOver={props.handleMouseOverWomen}
      onMouseOut={props.handleMouseOutWomen}
    >
      <div className="mt-3">
        <ul className="text-dark d-grid gap-2">
          <li className="fs-3 fw-bold">RECOMMENDED</li>
          {womenData.slice(0, 7).map((item) => {
            return (
              <a key={item.id} href={item.url}>
                <li className="fs-4">{item.name}</li>
              </a>
            );
          })}
        </ul>
      </div>

      <div className="d-flex gap-5">
        <div className="picture">
          <img src="/img/section_3/desktop/5.svg" alt="sneakers" />
        </div>

        <div className="picture">
          <img src="/img/section_3/desktop/8.svg" alt="sneakers" />
        </div>

        <div className="picture">
          <img src="/img/section_3/desktop/2.svg" alt="sneakers" />
        </div>
      </div>
    </div>
  );
};

const MenDropDown = (props) => {
  return (
    <div
      className="text-light position-absolute border-top header--item header--item--men"
      onMouseOver={props.handleMouseOverMen}
      onMouseOut={props.handleMouseOutMen}
    >
      <div className="mt-3">
        <ul className="text-dark d-grid gap-3" style={{ width: "29rem" }}>
          <li className="fs-2 fw-bold">THE LATEST</li>
          {menData.slice(0, 3).map((item) => {
            return (
              <a key={item.id} href={item.url}>
                <li className="fs-4">{item.name}</li>
              </a>
            );
          })}
        </ul>
      </div>

      <div className="d-flex gap-5">
        {menData.slice(0, 4).map((item) => {
          return (
            <a key={item.id} href={item.url}>
              <div>
                <div className="header--item--men__img">
                  <img src={item.img} />
                </div>
                <h2
                  className="text-dark fs-4 mt-3 text-center"
                  style={{ width: "20rem" }}
                >
                  {item.name}
                </h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const KidDropDown = (props) => {
  return (
    <div
      className="text-light position-absolute border-top header--item header--item--men"
      onMouseOver={props.handleMouseOverKid}
      onMouseOut={props.handleMouseOutKid}
    >
      <div className="d-flex gap-5">
        {kidData.slice(0, 4).map((item) => {
          return (
            <a key={item.id} href={item.url}>
              <div>
                <div className="header--item--men__img">
                  <img src={item.img} />
                </div>
                <h2
                  className="text-dark fs-4 mt-3 text-center"
                  style={{ width: "20rem" }}
                >
                  {item.name}
                </h2>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-3">
        <ul className="text-dark d-grid gap-3">
          <li className="fs-2 fw-bold">THE LATEST</li>
          {kidData.slice(0, 5).map((item) => {
            return (
              <a key={item.id} href={item.url}>
                <li className="fs-4">{item.name}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const SportsDropDown = (props) => {
  return (
    <div
      className="text-light position-absolute border-top header--item header--item--men header--item--sports"
      onMouseOver={props.handleMouseOverSports}
      onMouseOut={props.handleMouseOutSports}
    >
      <div className="d-flex gap-5">
        {Sports.slice(0, 4).map((item) => {
          return (
            <a key={item.id} href={item.url}>
              <div>
                <div className="header--item--men__img">
                  <img src={item.img} />
                </div>
                <h2
                  className="text-dark fs-4 mt-3 text-center"
                  style={{ width: "20rem" }}
                >
                  {item.name}
                </h2>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-3">
        <ul className="text-dark d-grid gap-3">
          <li className="fs-2 fw-bold">DISCOVER</li>
          {Sports.slice(0, 3).map((item) => {
            return (
              <a key={item.id} href={item.url}>
                <li className="fs-4">{item.name}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WomenDropDown;
export { MenDropDown, KidDropDown, SportsDropDown };
