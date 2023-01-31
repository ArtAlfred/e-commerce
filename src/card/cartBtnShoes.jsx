import React from "react";

const CartBtnShoesSize = (props) => {
  return (
    <div className="addToCart d-grid">
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "6rem" }}
      >
        <h6 className="fs-4">Select Size</h6>
        <h6 className="fs-4 text-muted">Size Guide</h6>
      </div>
      <p className="fs-4 text-danger">{props.warningShoes}</p>
      <div
        className="d-grid gap-2 mt-3"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <button
          type="button"
          className="size-btn fs-4 border p-3 py-4 rounded roboto"
          onClick={() => props.selectSize("39")}
        >
          39
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-3 py-4 rounded roboto"
          onClick={() => props.selectSize("40")}
        >
          40
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-3 py-4 rounded roboto"
          onClick={() => props.selectSize("41")}
        >
          41
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-3 py-4 rounded roboto"
          onClick={() => props.selectSize("42")}
        >
          42
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-3 py-4 rounded roboto"
          onClick={() => props.selectSize("43")}
        >
          43
        </button>
      </div>

      <button
        className="addToCart__btn button fs-4 text-light rounded mt-5"
        type="button"
        style={{
          background: "#000",
          boxShadow: "none",
          fontWeight: "500",
        }}
        onClick={props.addToCartShoes}
      >
        Add to Bag
      </button>
      <button
        className="addToCart__btn button fs-4 text-dark mt-3 border rounded size-btn"
        type="button"
        style={{
          background: "#fff",
          boxShadow: "none",
          fontWeight: "500",
        }}
      >
        Favorite
      </button>
    </div>
  );
};

export default CartBtnShoesSize;
