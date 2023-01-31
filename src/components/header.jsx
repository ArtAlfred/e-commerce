import React, { useState } from "react";

import WomenDropDown, {
  KidDropDown,
  MenDropDown,
  SportsDropDown,
} from "../card/dropDown";
import SearchBar from "../card/searchBar";
import Hero from "./hero";

const Header = (props) => {
  const [isHoveringWomen, setIsHoveringWomen] = useState(false);
  const [isHoveringMen, setIsHoveringMen] = useState(false);
  const [isHoveringKid, setIsHoveringKid] = useState(false);
  const [isHoveringSports, setIsHoveringSports] = useState(false);
  const [isHoveringLineWomen, setIsHoveringLineWomen] = useState();
  const [isHoveringLineMen, setIsHoveringLineMen] = useState();
  const [isHoveringLineKid, setIsHoveringLineKid] = useState();
  const [isHoveringLineSports, setIsHoveringLineSports] = useState();

  const [isVisibleSearch, setIsVisibleSearch] = useState(false);

  function handleMouseOverWomen() {
    setIsHoveringWomen(true);
    setIsHoveringLineWomen("2.2px solid #000");
  }

  function handleMouseOutWomen() {
    setIsHoveringWomen(false);
    setIsHoveringLineWomen("none");
  }

  function handleMouseOverMen() {
    setIsHoveringMen(true);
    setIsHoveringLineMen("2.2px solid #000");
  }

  function handleMouseOutMen() {
    setIsHoveringMen(false);
    setIsHoveringLineMen("none");
  }

  function handleMouseOverKid() {
    setIsHoveringKid(true);
    setIsHoveringLineKid("2.2px solid #000");
  }

  function handleMouseOutKid() {
    setIsHoveringKid(false);
    setIsHoveringLineKid("none");
  }

  function handleMouseOverSports() {
    setIsHoveringSports(true);
    setIsHoveringLineSports("2.2px solid #000");
  }

  function handleMouseOutSports() {
    setIsHoveringSports(false);
    setIsHoveringLineSports("none");
  }

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "4rem",
          width: "100%",
          background: "#000",
        }}
      >
        <p className="fs-5 fw-semibold text-center text-light">
          FREE SHIPPING FOR MEMBERS AND ALL ORDERS IN APP
        </p>
      </div>
      <nav className="position-relative">
        <header className="header d-flex align-items-center justify-content-between">
          <button
            className="menu--sidebar"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
            style={{ display: "none" }}
          >
            <img src="/img/menu.png" style={{ height: "3rem" }} />
          </button>
          <div
            className="header--logo d-grid position-absolute start-50 translate-middle"
            style={{ top: "60%", gap: "1.6rem" }}
          >
            <div className="d-flex justify-content-center">
              <a href="/">
                <img
                  className="logo"
                  src="/img/logo/logo_header.png"
                  alt="logo"
                />
              </a>
            </div>

            <div className="header--section d-flex" style={{ gap: "4rem" }}>
              <a
                className="fs-4 fw-bold padding--bottom--nav"
                href="/new_Arrival"
              >
                NEW ARRIVALS
              </a>

              <div>
                <a
                  className="fs-4 padding--bottom--nav"
                  href="/women"
                  onMouseOver={handleMouseOverWomen}
                  onMouseOut={handleMouseOutWomen}
                >
                  WOMEN
                </a>
                <div
                  className=""
                  style={{
                    width: "100%",
                    height: "2.4rem",
                    borderBottom: isHoveringLineWomen,
                    transition: "width 1s ease",
                    margin: "0 auto",
                  }}
                ></div>
              </div>

              <div>
                <a
                  className="fs-4 padding--bottom--nav"
                  href="/men"
                  onMouseOver={handleMouseOverMen}
                  onMouseOut={handleMouseOutMen}
                >
                  MEN
                </a>
                <div
                  className=""
                  style={{
                    width: "100%",
                    height: "2.4rem",
                    borderBottom: isHoveringLineMen,
                    margin: "0 auto",
                  }}
                ></div>
              </div>
              <div>
                <a
                  className="fs-4 padding--bottom--nav"
                  href="/kid"
                  onMouseOver={handleMouseOverKid}
                  onMouseOut={handleMouseOutKid}
                >
                  KIDS
                </a>
                <div
                  className="hover--line"
                  style={{
                    width: "100%",
                    height: "2.4rem",
                    borderBottom: isHoveringLineKid,
                    margin: "0 auto",
                  }}
                ></div>
              </div>
              <div>
                <a
                  className="fs-4 padding--bottom--nav"
                  href="/personal_care"
                  onMouseOver={handleMouseOverSports}
                  onMouseOut={handleMouseOutSports}
                >
                  PERSONAL CARE
                </a>
                <div
                  className="hover--line"
                  style={{
                    width: "100%",
                    height: "2.4rem",
                    borderBottom: isHoveringLineSports,
                    margin: "0 auto",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="search--cart position-absolute top-50 end-0 translate-middle">
            <button className="profile" style={{ marginRight: "2rem" }}>
              <ion-icon name="person-outline"></ion-icon>
            </button>
            <button
              onClick={() => setIsVisibleSearch(!isVisibleSearch)}
              style={{ marginRight: "2rem" }}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button
              className="position-relative"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              ref={props.buttonRef}
            >
              <ion-icon name="bag-outline"></ion-icon>
            </button>
          </div>
        </header>
        {isVisibleSearch && (
          <SearchBar
            isVisibleSearch={isVisibleSearch}
            setIsVisibleSearch={setIsVisibleSearch}
          />
        )}

        {isHoveringWomen && (
          <WomenDropDown
            handleMouseOverWomen={handleMouseOverWomen}
            handleMouseOutWomen={handleMouseOutWomen}
          />
        )}
        {isHoveringMen && (
          <MenDropDown
            handleMouseOverMen={handleMouseOverMen}
            handleMouseOutMen={handleMouseOutMen}
          />
        )}
        {isHoveringKid && (
          <KidDropDown
            handleMouseOverKid={handleMouseOverKid}
            handleMouseOutKid={handleMouseOutKid}
          />
        )}
        {isHoveringSports && (
          <SportsDropDown
            handleMouseOverSports={handleMouseOverSports}
            handleMouseOutSports={handleMouseOutSports}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
