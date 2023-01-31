import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "16rem" }}>
      <div className="d-grid justify-content-center">
        <p className="text-center fs-4">Follow us on instagram @AlphaStore</p>
        <h1 className="text-center fw-bold mt-4" style={{ fontSize: "3rem" }}>
          JOIN THE ALPHA CLUB!
        </h1>

        <div className="footer--instagram row container gap-3 mx-auto mt-5">
          <div
            className="footer--instagram__image col-sm"
            style={{ height: "30rem", width: "100%" }}
          >
            <img src="/img/edit/1.jpg" alt="edit" style={{ width: "100%" }} />
            <p className="text-center fs-3 mt-4">
              JAN 10, 2023{" "}
              <span className="d-block">Jujutsu Kaisen x ALPHA Lookbook</span>
            </p>
          </div>
          <div
            className="footer--instagram__image col-sm"
            style={{ height: "30rem", width: "100%" }}
          >
            <img src="/img/edit/2.jpg" alt="edit" style={{ width: "100%" }} />
            <p className="text-center fs-3 mt-4">
              JAN 10, 2023{" "}
              <span className="d-block">Jujutsu Kaisen x ALPHA Lookbook</span>
            </p>
          </div>
          <div
            className="footer--instagram__image col-sm"
            style={{ height: "30rem", width: "100%" }}
          >
            <img src="/img/edit/3.jpg" alt="edit" style={{ width: "100%" }} />
            <p className="text-center fs-3 mt-4">
              JAN 10, 2023{" "}
              <span className="d-block">Jujutsu Kaisen x ALPHA Lookbook</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sign--up" style={{ marginTop: "8rem" }}>
        <h1
          className="text-center"
          style={{ fontSize: "5rem", fontWeight: "900" }}
        >
          FEEL YOUR ALL
        </h1>
        <p className="text-center fs-4" style={{ fontWeight: "500" }}>
          This is a celebration of everything that moves you. For the power of
          choosing and freedom of being.
        </p>
        <div className="d-grid justify-content-center mt-5">
          <button
            className="button fs-4 fw-semibold text-light"
            type="button"
            style={{ background: "#000" }}
          >
            SIGN UP FOR FREE
          </button>
        </div>
      </div>

      <div className="footer" style={{ paddingBottom: "10rem" }}>
        <footer
          className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5"
          style={{ padding: "0rem 6rem 0rem 10rem" }}
        >
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img
                src="/img/logo/logo_footer.png"
                alt="logo"
                style={{ height: "12rem" }}
              />
            </a>
            <div className="mb-3">
              <p className="fs-4 text-light" style={{ width: "25rem" }}>
                Be the first to know when we stock new designs
              </p>
            </div>
            <p className="text-light fs-5 roboto">
              &copy; 2023 created by Art Alfred Bernales
            </p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3 mt-5">
            <h5 className="fs-3 text-light text-uppercase">About Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-3">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 mt-5">
            <h5 className="fs-3 text-light text-uppercase">Get Help</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-3">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Find a Store
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Become a Member
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Sign Up For Email
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Send Us Feedback
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Faqs
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 mt-5">
            <h5 className="fs-3 text-light text-uppercase">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-3">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Order Status
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Delivery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Order Status Payment Options
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Order Status Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light fs-4">
                  Order Status About Us
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
