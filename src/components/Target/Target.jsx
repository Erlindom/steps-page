import React from "react";
import "./Target.css";
import Number from "../Numbers/Number.jsx";

function Target() {
  return (
    <div className="content">
      <div className="target">
        <aside className="aside">
          <div className="column-steps">
            <Number number="1" step="step 1" info="your info" />
            <Number number="2" step="step 2" info="select plan" />
            <Number number="3" step="step 3" info="add-ons" />
            <Number number="4" step="step 4" info="summary" />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Target;
