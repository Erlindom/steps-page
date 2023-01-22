import React from "react";
import "./Number.css";

function Number(props) {
  return (
    <div className="steps">
      <div className="number">
        <p>{props.number}</p>
      </div>
      <div>
        <p className="text-step">{props.step}</p>
        <p className="text-info">{props.info}</p>
      </div>
    </div>
  );
}

export default Number;
