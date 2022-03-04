import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="section-title">
        <h2>Our Tours</h2>
      </div>
      <div className="display-area">
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
