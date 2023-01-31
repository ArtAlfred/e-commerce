import React from "react";

const SideBar = () => {
  return (
    <div
      className="sidebar--offcanvas offcanvas offcanvas-start"
      tabIndex="-1"
      id="sidebar"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header mt-5 px-5">
        <button
          className="close__cart"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <ion-icon
            name="close-outline"
            role="img"
            class="md hydrated"
            aria-label="close outline"
          ></ion-icon>
        </button>
      </div>
      <div className="offcanvas-body px-5 mt-5">
        <ul style={{ paddingLeft: "0" }}>
          <a href="/new_Arrival">
            <li
              className="fs-4 border-bottom"
              style={{ paddingBottom: "2rem" }}
            >
              NEW ARRIVALS
            </li>
          </a>
          <a href="/women">
            <li
              className="fs-4 border-bottom mt-4"
              style={{ paddingBottom: "2rem" }}
            >
              WOMEN
            </li>
          </a>
          <a href="/men">
            <li
              className="fs-4 border-bottom mt-4"
              style={{ paddingBottom: "2rem" }}
            >
              MEN
            </li>
          </a>
          <a href="/kid">
            <li
              className="fs-4 border-bottom mt-4"
              style={{ paddingBottom: "2rem" }}
            >
              KIDS
            </li>
          </a>
          <a href="/personal_care">
            <li
              className="fs-4 border-bottom mt-4"
              style={{ paddingBottom: "2rem" }}
            >
              PERSONAL CARE
            </li>
          </a>
          <a href="/new_Arrival">
            <li
              className="fs-4 border-bottom mt-4"
              style={{ paddingBottom: "2rem" }}
            >
              CONTACT US
            </li>
          </a>
          <a href="/new_Arrival">
            <li
              className="fs-4 mt-5 text-muted"
              style={{ paddingBottom: "2rem" }}
            >
              Account
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
