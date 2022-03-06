import React, { useState } from "react";

const Tour = ({ id, name, price, info, image, deleteTour }) => {
  const [readMore, setreadMore] = useState(false);
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
        <p className="tour-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="read-more" onClick={() => setreadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="remove-btn" onClick={() => deleteTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
