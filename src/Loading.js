import React from "react";
import loadImg from "./1488.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader">
        <img src={loadImg} alt="" />
      </div>
    </div>
  );
};

export default Loading;
