import React from "react";
import Details from "./Details";
import Form from "./Form";
import Total from "./Total";
import "./card.css";
const Card = () => {
  return (
    <div className="details_bg">
      <div className="mx-3 pb-2">
        <Details />
        <Form />
        <Total />
      </div>
    </div>
  );
};

export default Card;
