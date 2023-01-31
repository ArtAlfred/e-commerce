import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import CartBtnSML from "./CartBtnSml";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import FreeSizeBtn from "./freeSizeBtn";
import CartBtnShoesSize from "./cartBtnShoes";
import CareBtn from "./careBtn";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Cart = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [warning, setWarning] = useState("");
  const [sizeSelected, setSizeSelected] = useState(null);
  const [message, setMessage] = useState("");

  const buttonRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart() {
    if (!sizeSelected) {
      setWarning("Please select a size before adding to cart.");
      setTimeout(() => setWarning(""), 1000);
      return;
    }

    const itemIndex = cart.findIndex(
      (i) => i.name === props.item.name && i.size === sizeSelected
    );

    if (itemIndex === -1) {
      // If the item is not in the cart, add it with a count of 1
      setCart((prevState) => [
        ...prevState,
        { ...props.item, count: 1, size: sizeSelected },
      ]);
    } else {
      // If the item is already in the cart, increment its count
      setCart((prevState) =>
        prevState.map((item, index) => {
          if (index === itemIndex && item.size === sizeSelected) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    }
    setSizeSelected(false);
    buttonRef.current.click();
  }

  function deleteFromCart(item) {
    setCart((prevState) => prevState.filter((i) => i !== item));
  }

  function calculateTotalPrice() {
    return cart.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  }

  function incrementCount(item) {
    setCart((prevState) =>
      prevState.map((i) => {
        if (i.name === item.name && i.size === item.size) {
          return { ...i, count: i.count + 1 };
        }
        return i;
      })
    );
  }

  function decrementCount(item) {
    setCart((prevState) =>
      prevState.map((i) => {
        if (i.name === item.name && i.size === item.size) {
          if (i.count === 1) {
            deleteFromCart(i);
          } else {
            return { ...i, count: i.count - 1 };
          }
        }
        return i;
      })
    );
  }

  function selectSize(size) {
    setSizeSelected(size);
  }

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {props.cartItem && (
        <div>
          <Header buttonRef={buttonRef} />
          <div className="card container-sm">
            <div className="d-flex align-items-center gap-4">
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

            <div className="cart--web items mt-5">
              <div
                className="indicates d-grid"
                style={{ height: "48rem", gap: "2rem", width: "8rem" }}
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  <img src={props.img1} />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                >
                  <img src={props.img2} />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                >
                  <img src={props.img3} />
                </button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                >
                  <img src={props.img4} />
                </button>
              </div>

              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
                style={{ width: "65rem" }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={props.img1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.img2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.img3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={props.img4} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>

              <div
                className="cart--items-name-descp col-4 mt-3 position-relative"
                style={{ marginLeft: "3rem" }}
              >
                <div
                  className="border-bottom"
                  style={{ paddingBottom: "3rem" }}
                >
                  <h1
                    className="card--name"
                    style={{ fontSize: "3.8rem", fontWeight: "bold" }}
                  >
                    {props.name}
                  </h1>
                  <h1
                    className="fs-2 mt-4 roboto"
                    style={{ fontWeight: "400" }}
                  >
                    ${props.price}.00
                  </h1>
                </div>

                {props.showSML && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "13rem" }}
                    >
                      {props.color}
                    </h1>

                    <CartBtnSML
                      selectSizeSimple={selectSize}
                      addToCartSimple={addToCart}
                      warningSimple={warning}
                    />
                  </div>
                )}

                {props.showFreeSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <FreeSizeBtn
                      selectSizeSimple={selectSize}
                      addToCartSimple={addToCart}
                      warningSimple={warning}
                    />
                  </div>
                )}

                {props.showShoesSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <CartBtnShoesSize
                      selectSize={selectSize}
                      addToCartShoes={addToCart}
                      warningShoes={warning}
                    />
                  </div>
                )}

                {props.showCareSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <CareBtn
                      selectSize={selectSize}
                      addToCartCare={addToCart}
                      warningCare={warning}
                    />
                  </div>
                )}

                <div>
                  <p className="fs-4 mt-5" style={{ fontWeight: "500" }}>
                    With an aged aesthetic and classic colours, the AF-1 gets a
                    vintage makeover. Crisp leather with a checked pattern on
                    the Swoosh and heel adds a festive feel for easy styling.
                    Pair it with jeans, joggers or whatever else—the timeless
                    look is the perfect match for any outfit.
                  </p>

                  <div className="d-flex align-items-center gap-5 mt-5">
                    <img
                      style={{ height: "3rem" }}
                      src="/img/section_2/fast-delivery.png"
                      alt="free-shipping"
                    />
                    <p className="fs-4 text-decoration-underline fw-semibold">
                      FREE SHIPPING FOR ADICLUB MEMBERS AND ALL ORDERS IN APP
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-5 mt-5">
                    <img
                      style={{ height: "3rem" }}
                      src="/img/section_2/guarantee-certificate.png"
                      alt="guarantee safety"
                    />
                    <p className="fs-4 text-decoration-underline fw-semibold">
                      GUARANTEE SAFETY AND ORIGINAL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="cart--mobile d-none items mt-5">
              <div className="d-flex gap-4 justify-content-between">
                <div
                  className="indicates d-grid"
                  style={{ height: "48rem", gap: "2rem", width: "8rem" }}
                >
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators--mobile"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img src={props.img1} />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators--mobile"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img src={props.img2} />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators--mobile"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img src={props.img3} />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators--mobile"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img src={props.img4} />
                  </button>
                </div>

                <div
                  id="carouselExampleIndicators--mobile"
                  className="cart--slide carousel slide"
                  data-bs-ride="true"
                  style={{ width: "65rem" }}
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={props.img1}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={props.img2}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={props.img3}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={props.img4}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="cart--items-name-descp col-4 mt-3 position-relative"
                style={{ marginLeft: "3rem" }}
              >
                <div
                  className="border-bottom"
                  style={{ paddingBottom: "3rem" }}
                >
                  <h1
                    className="cart--name"
                    style={{ fontSize: "3.8rem", fontWeight: "bold" }}
                  >
                    {props.name}
                  </h1>
                  <h1
                    className="fs-2 mt-4 roboto"
                    style={{ fontWeight: "400" }}
                  >
                    ${props.price}.00
                  </h1>
                </div>

                {props.showSML && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "13rem" }}
                    >
                      {props.color}
                    </h1>

                    <CartBtnSML
                      selectSizeSimple={selectSize}
                      addToCartSimple={addToCart}
                      warningSimple={warning}
                    />
                  </div>
                )}

                {props.showFreeSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <FreeSizeBtn
                      selectSizeSimple={selectSize}
                      addToCartSimple={addToCart}
                      warningSimple={warning}
                    />
                  </div>
                )}

                {props.showShoesSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <CartBtnShoesSize
                      selectSize={selectSize}
                      addToCartShoes={addToCart}
                      warningShoes={warning}
                    />
                  </div>
                )}

                {props.showCareSize && (
                  <div>
                    <h1 className="fs-5 fw-bold mt-5">COLOR</h1>
                    <h1
                      className="fs-4 p-3 text-center"
                      style={{ border: "3px solid #000", width: "12rem" }}
                    >
                      {props.color}
                    </h1>

                    <CareBtn
                      selectSize={selectSize}
                      addToCartCare={addToCart}
                      warningCare={warning}
                    />
                  </div>
                )}

                <div>
                  <p className="fs-4 mt-5" style={{ fontWeight: "500" }}>
                    With an aged aesthetic and classic colours, the AF-1 gets a
                    vintage makeover. Crisp leather with a checked pattern on
                    the Swoosh and heel adds a festive feel for easy styling.
                    Pair it with jeans, joggers or whatever else—the timeless
                    look is the perfect match for any outfit.
                  </p>

                  <div className="d-flex align-items-center gap-5 mt-5">
                    <img
                      style={{ height: "3rem" }}
                      src="/img/section_2/fast-delivery.png"
                      alt="free-shipping"
                    />
                    <p className="fs-4 text-decoration-underline fw-semibold">
                      FREE SHIPPING FOR ADICLUB MEMBERS AND ALL ORDERS IN APP
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-5 mt-5">
                    <img
                      style={{ height: "3rem" }}
                      src="/img/section_2/guarantee-certificate.png"
                      alt="guarantee safety"
                    />
                    <p className="fs-4 text-decoration-underline fw-semibold">
                      GUARANTEE SAFETY AND ORIGINAL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* CART */} {/* CART */}
      <div
        className="cart-offCanvas offcanvas offcanvas-end px-5 "
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "45rem" }}
      >
        <div
          className="offcanvas-header mt-5 border-bottom"
          style={{ paddingBottom: "2rem" }}
        >
          <h5
            className="offcanvas-title fs-1 fw-bold"
            id="offcanvasExampleLabel"
          >
            Cart
          </h5>
          <button
            type="button"
            className="close__cart"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <div className="border-bottom mt-5" style={{ height: "15rem" }}>
          <div className="border px-5 py-4" style={{ height: "12rem" }}>
            <h6 className="fs-5 fw-bold">
              Store Pick-up and Shipping Available
            </h6>
            <p className="fs-5">
              Buy online and pick up your items from your local OXGN store or
              have them shipped to your home instead.
            </p>
            <h6
              className="fw-bold mt-4 text-decoration-underline fst-italic"
              style={{ fontSize: "1rem" }}
            >
              Learn more here
            </h6>
          </div>
        </div>

        <div
          className="offcanvas-body mt-5 items"
          style={{ padding: "0", height: "30rem" }}
        >
          <ul
            className=" list-group d-grid gap-3"
            style={{ paddingBottom: "2rem" }}
          >
            {cart.map((item, key) => (
              <li
                key={key}
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  position: "relative",
                  borderRadius: ".8rem",
                }}
              >
                <img
                  style={{ height: "12rem", borderRadius: ".5rem" }}
                  src={item.image}
                  alt={item.name}
                />

                <div className="d-grid gap-2 w-100">
                  <div>
                    <h1
                      className="fs-4 roboto"
                      style={{ width: "25rem", fontWeight: "normal" }}
                    >
                      {item.name}
                    </h1>
                    <h1
                      className="fs-5 roboto"
                      style={{ fontWeight: "normal" }}
                    >
                      {item.size}
                    </h1>
                    <button
                      className="remove--mobile text-start fs-5 d-flex align-items-center text-decoration-underline"
                      onClick={() => deleteFromCart(item)}
                    >
                      <span className="remove">
                        <ion-icon name="close-outline"></ion-icon>
                      </span>
                      remove
                    </button>
                    <h1
                      className="price--mobile fs-4 roboto fw-normal"
                      style={{ display: "none" }}
                    >
                      ${item.price}.00
                    </h1>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div
                      className="d-flex align-items-center px-3 py-3 border"
                      style={{ height: "3.4rem", gap: "2rem" }}
                    >
                      <button
                        className="fs-1"
                        onClick={() => decrementCount(item)}
                      >
                        -
                      </button>
                      <h1 className="fs-4 text-dark roboto mt-2 fw-normal">
                        {item.count}
                      </h1>
                      <button
                        className="fs-1"
                        onClick={() => incrementCount(item)}
                      >
                        +
                      </button>
                    </div>

                    <h1 className="price fs-4 roboto fw-normal">
                      ${item.price}.00
                    </h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-top" style={{ height: "18rem" }}>
          <div className="d-flex mt-5 justify-content-between">
            <h3
              className="fs-4"
              style={{ letterSpacing: "2px", fontWeight: "900" }}
            >
              SUBTOTAL
            </h3>
            <h3
              className="fs-4 roboto fw-normal"
              style={{ letterSpacing: "2px", fontWeight: "900" }}
            >
              ${calculateTotalPrice()}.00
            </h3>
          </div>
          <p className="fs-5 mt-3">
            Shipping and discount codes calculated at checkout.
          </p>
          <button
            className="general--button fw-bold w-100 text-light mt-3"
            type="button"
          >
            Review Cart
          </button>
        </div>
      </div>
      {props.footerCart && <Footer />}
    </div>
  );
};

export default Cart;
