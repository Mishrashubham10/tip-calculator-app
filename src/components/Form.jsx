// import { useState } from "react";

/* eslint-disable react/prop-types */
const Form = ({ bill, setBill, people, setPeople, setTip }) => {

  const handleSelectedTip = (e) => {
    setTip(+e.target.value);
  };

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
        </div>
        <input
          type="number"
          id="bill"
          name="bill"
          onInput={(e) => setBill(+e.target.value)}
          value={bill}
        />
      </div>

      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              id="input1"
              value="5"
              className="tip-input"
              onInput={handleSelectedTip}
            />
            <label className="tip-btn" htmlFor="input1">
              5%
            </label>
          </div>

          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              id="input2"
              value="10"
              className="tip-input"
              onInput={handleSelectedTip}
            />
            <label className="tip-btn" htmlFor="input2">
              10%
            </label>
          </div>

          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              id="input3"
              value="15"
              className="tip-input"
              onInput={handleSelectedTip}
            />
            <label className="tip-btn" htmlFor="input3">
              15%
            </label>
          </div>

          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              id="input4"
              value="25"
              className="tip-input"
              onInput={handleSelectedTip}
            />
            <label className="tip-btn" htmlFor="input4">
              25%
            </label>
          </div>

          <div className="tip-amount">
            <input
              type="radio"
              name="tip"
              id="input5"
              value="50"
              className="tip-input"
              onInput={handleSelectedTip}
            />
            <label className="tip-btn" htmlFor="input5">
              50%
            </label>
          </div>
          <div className="custom-wrapper">
            <input
              type="number"
              id="custom"
              className="number-input tip-custom"
              name="tip"
              placeholder="Custom"
              onInput={handleSelectedTip}
            />
            <label htmlFor="custom" className="tip-custom-label">
              Custom
            </label>
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">
            Number of people
          </label>
          <p className="error">{people === 0 ? "Can't be zero" : ""}</p>
        </div>
        <input
          type="number"
          id="people"
          name="people"
          className={`number-input ${people === 0 ? 'number-error' : ""}`}
          onInput={(e) => setPeople(+e.target.value)}
          value={people}
        />
      </div>
    </div>
  );
};

export default Form;
