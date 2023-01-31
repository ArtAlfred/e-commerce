import React from "react";

const CartBtnSML = (props) => {
  return (
    <div className="addToCart d-grid">
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "2rem" }}
      >
        <h6 className="fs-4 fw-semibold">Size</h6>
      </div>
      <p className="fs-4 text-danger">{props.warningSimple}</p>
      <div
        className="d-grid mt-3"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem 1rem",
        }}
      >
        <button
          type="button"
          className="size-btn fs-4 border p-2 py-3"
          onClick={() => props.selectSizeSimple("Extra Small")}
        >
          Extra Small
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-2 py-3"
          onClick={() => props.selectSizeSimple("Small")}
        >
          Small
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-2 py-3"
          onClick={() => props.selectSizeSimple("Medium")}
        >
          Medium
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-2 py-3"
          onClick={() => props.selectSizeSimple("Large")}
        >
          Large
        </button>
        <button
          type="button"
          className="size-btn fs-4 border p-2 py-3"
          onClick={() => props.selectSizeSimple("Extra Large")}
        >
          Extra Large
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
        onClick={props.addToCartSimple}
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

export default CartBtnSML;
