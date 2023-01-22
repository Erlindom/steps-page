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

        <div className="visual-step">
          <div>
            <h1 className="title">Personal info</h1>
            <p className="text">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <form action="" className="form">
            <div className="form-input">
              <label className="label" htmlFor="">
                Name
              </label>
              <input className="input" type="text" />
            </div>
            <div className="form-input">
              <label className="label" htmlFor="">
                Email Address
              </label>
              <input className="input" type="email" />
            </div>
            <div className="form-input">
              <label className="label" htmlFor="">
                Phone Number
              </label>
              <input className="input" type="text" />
            </div>
          </form>
          <div className="btn-content">
            <button className="btn">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Target;
