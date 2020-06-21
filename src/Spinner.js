import React from "react";
import ReactLoading from "react-loading";
import "./Spinner.css";
function Spinner() {
  return (
    <div className="spinner">
      <ReactLoading type="bubbles" color="black" />
    </div>
  );
}

export default Spinner;