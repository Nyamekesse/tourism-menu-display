import React, { useState } from "react";

const Tour = ({ id, name, price, info, image }) => {
  return (
    <div className="display-cards">
      <div className="img-holder">
        <img src={image} alt={name} />
      </div>
      <div className="section-2">
        <div className="info-section">
          <h4>{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p className="tour-info">{info}</p>
        <button className="remove-btn">Not Interested</button>
      </div>
    </div>
  );
};

export default Tour;
