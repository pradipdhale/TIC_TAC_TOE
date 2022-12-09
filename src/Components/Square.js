import React from "react";
import "./square.css";

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
    
  );
};

export default Square;
