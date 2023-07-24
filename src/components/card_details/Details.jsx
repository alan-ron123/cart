import React from "react";
import profile from "../../assets/images/profile.jpg";
import black from "../../assets/images/black.jpg";
import gold from "../../assets/images/violet.avif";
import blue from "../../assets/images/blue.jpg";
import transparent from "../../assets/images/transparent.jpg";

const Details = () => {
  return (
    <div className="pt-3">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="heading_color">Card Details</h5>
        </div>
        <div>
          <img className="profile_img" src={profile} alt="profile" />
        </div>
      </div>
      <p className="heading_color">card type</p>
      <div className="d-flex justify-content-between">
        <img className="payment_cards" src={gold} />
        <img className="payment_cards" src={black} />
        <img className="payment_cards" src={blue} />
        <div className="payment_cards position-relative bg_URL">
          <span className="position-absolute top-50 start-50 translate-middle heading_color">
            all
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
