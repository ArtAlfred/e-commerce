import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators hero--carousel">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/hero/1.jpg"
              className="hero--img--1 d-block w-100 hero--img"
              alt="..."
            />

            <img
              src="/img/hero/mobile/1.jpg"
              className="hero--img--2 d-block w-100 hero--img d-none"
              alt="..."
            />

            <div
              className="hero--box--img p-3 px-5 w-100"
              style={{ zIndex: "3" }}
            >
              <h1
                className="text-light text-center w-100"
                style={{ fontSize: "2.8rem", letterSpacing: "4px" }}
              >
                DISCOVER OUR WINNER SALES
              </h1>
              <div className="w-100 d-flex justify-content-center mt-3">
                <a href="" className="btn--hero btn1 text-center">
                  For Him
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero/2.jpg"
              className="hero--img--1 d-block w-100 hero--img"
              alt="..."
            />

            <img
              src="/img/hero/mobile/2.jpg"
              className="hero--img--2 d-block w-100 hero--img d-none"
              alt="..."
            />
            <div
              className="hero--box--img p-3 px-5 w-100"
              style={{ zIndex: "3" }}
            >
              <h1
                className="text-light text-center w-100"
                style={{ fontSize: "2.8rem", letterSpacing: "4px" }}
              >
                DISCOVER OUR WINNER SALES
              </h1>
              <div className="w-100 d-flex justify-content-center mt-3">
                <a href="" className="btn--hero btn1 text-center">
                  For Her
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero/3.png"
              className="hero--img--1 d-block w-100 hero--img"
              alt="..."
            />

            <img
              src="/img/hero/mobile/3.jpg"
              className="hero--img--2 d-block w-100 hero--img d-none"
              alt="..."
            />
            <div
              className="hero--box--img p-3 px-5 w-100"
              style={{ zIndex: "3" }}
            >
              <h1
                className="text-light text-center w-100"
                style={{ fontSize: "2.8rem", letterSpacing: "4px" }}
              >
                MOVE AROUND WITH COMFORT AND STYLE
              </h1>
              <div className="w-100 d-flex justify-content-center gap-4">
                <a href="" className="btn--hero btn1 text-center">
                  For Him
                </a>
                <a href="" className="btn--hero btn1 text-center">
                  For Her
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/hero/4.png"
              className="hero--img--1 d-block w-100 hero--img"
              alt="..."
            />

            <img
              src="/img/hero/mobile/4.jpg"
              className="hero--img--2 d-block w-100 hero--img d-none"
              alt="..."
            />
            <div
              className="hero--box--img p-3 px-5 w-100"
              style={{ zIndex: "3" }}
            >
              <h1
                className=" text-light text-center w-100"
                style={{ fontSize: "2.8rem", letterSpacing: "4px" }}
              >
                STYLISH CLOTHES IN A VARIETY OF DESIGNS
              </h1>
              <div className="w-100 d-flex justify-content-center gap-4">
                <a href="" className="btn--hero btn1 text-center">
                  For Him
                </a>
                <a href="" className="btn--hero btn1 text-center">
                  For Her
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
