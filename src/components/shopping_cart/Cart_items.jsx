import React from "react";
import "./cart.css";

const Cart_items = ({ products, onAdd, onRemove, cart, del }) => {
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div className="card my-1">
            <div className="d-flex justify-content-between mx-3 align-items-center">
              <div>
                <img className="cart_img" src={item.images} alt="products" />
              </div>
              <div>
                <h5>
                  <strong>{item.title}</strong>
                </h5>
                <p>{item.category}</p>
              </div>
              <div>{1}</div>
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-success" onClick={() => onAdd(item)}>
                  +
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => onRemove(item)}
                >
                  -
                </button>
              </div>
              <div>${item.price}</div>
              <div>
                <button className="btn btn-danger" onClick={() => del(item)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart_items;
