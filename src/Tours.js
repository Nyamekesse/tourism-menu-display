import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="section-title">
        <h2>Our Tours</h2>
      </div>
      <div className="display-area">
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
