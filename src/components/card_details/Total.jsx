import React from "react";
import "./card.css";
const Total = () => {
  return (
    <div className="heading_color ">
      <div className="d-flex justify-content-between">
        <div>subtotal(3 items)</div> <div>$1000</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>shipping</div> <div>$4</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>total(incl.Tax)</div> <div>$1100</div>
      </div>
      <div className="d-flex justify-content-between py-2 px-3 btn_style my-3">
        <div>Total</div>
        <div>
          <button className="bg_button">checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Total;
