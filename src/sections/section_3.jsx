import React, { useState, useEffect, useRef } from "react";
import Sports, { section_3, section_3_part2 } from "../data";

const Section_3 = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="section--3" style={{ marginTop: "8rem" }}>
      <div className="d-flex justify-content-center align-items-center position-relative">
        <div>
          <p className="text-center fs-4" style={{ letterSpacing: ".2rem" }}>
            MOST POPULAR
          </p>
          <h1
            className="text-center mt-2"
            style={{ fontSize: "3.8rem", fontWeight: "800" }}
          >
            WHAT'S HOT
          </h1>
        </div>

        <div
          className="section--3--button d-flex position-absolute top-50 translate-middle gap-3"
          style={{ right: "0" }}
        >
          <button
            onClick={scrollRight}
            className="text-center p-3"
            style={{ background: "#000" }}
          >
            <span style={{ color: "#fff" }}>
              <ion-icon name="chevron-back"></ion-icon>
            </span>
          </button>
          <button
            onClick={scrollLeft}
            className="text-center p-3"
            style={{ background: "#000" }}
          >
            <span style={{ color: "#fff" }}>
              <ion-icon name="chevron-forward"></ion-icon>
            </span>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="section--3__items gap-5 mt-5">
        {section_3.slice(0, 9).map((item) => {
          return (
            <a
              key={item.id}
              href={item.url}
              style={{ height: "54rem", padding: "0rem" }}
            >
              <div className="" style={{ width: "27rem" }}>
                <div style={{ height: "40rem" }}>
                  <img
                    src={item.img}
                    alt="img-1"
                    style={{ height: "inherit" }}
                  />
                </div>

                <div className="px-1 mt-5">
                  <h1 className="fs-3 fw-semibold text-center mt-3">
                    {item.name}
                  </h1>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Section_3;
