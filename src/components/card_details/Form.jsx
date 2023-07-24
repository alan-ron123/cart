import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="pt-2">
          <label className="label-control heading_color">Name On Card</label>
          <input className="form-control" type="text" placeholder="name" />
        </div>
        <div className="pt-2">
          <label className="label-control heading_color">Card Number</label>
          <input
            className="form-control"
            type="text"
            placeholder="1111 2222 3333 5555"
          />
        </div>
        <div className="d-flex gap-3 pt-2">
          <div className="flex-grow-1">
            <label className="label-control heading_color">
              Expiration date
            </label>
            <input className="form-control" type="text" placeholder="mm/yy" />
          </div>
          <div className="flex-grow-1">
            <label className="label-control heading_color">CVV</label>
            <input className="form-control" type="text" placeholder="cvv" />
          </div>
        </div>
      </form>
      <hr className="heading_color" />
    </>
  );
};

export default Form;
