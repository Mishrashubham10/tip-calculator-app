/* eslint-disable react/prop-types */
const Form = ({ handleBillAmtInput, billAmt, handleSelectedTip, showbillAmtError, handlePeepsInput, peeps, showPeepsError }) => {

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
        <label 
        className="label" 
        htmlFor="bill">
          Bill
        </label>
        <p className="error">
          {
          showbillAmtError ? "Please enter numbers only" : ""
        }
        </p>
        </div>
        <input 
        type="number" 
        id="bill" 
        name="bill" 
        onInput={handleBillAmtInput}
        value={billAmt} 
        />
      </div>

      <div className="tip-section">
        <p className="label">Selected Tip %</p>
        <div className="tip-amount-wrapper">
        <div className="tip-amount">
        <input 
        type="radio" 
        name="tip" 
        id="tip" 
        value=".05" 
        onChange={handleSelectedTip}  
        />
        <div className="tip-btn">
        5%
        </div>
        </div>

        <div className="tip-amount">
        <input 
        type="radio" 
        name="tip" 
        id="tip" 
        value=".1" 
        onChange={handleSelectedTip}  />
        <div className="tip-btn">
            10%
        </div>
        </div>

        <div className="tip-amount">
        <input 
        type="radio" 
        name="tip" 
        id="tip" 
        value=".15" 
        onChange={handleSelectedTip}
        />
        <div className="tip-btn">
            15%
        </div>
        </div>

        <div className="tip-amount">
        <input 
        type="radio" 
        name="tip" id="tip" 
        value=".25" 
        onChange={handleSelectedTip} 
        />
        <div className="tip-btn">
            25%
        </div>
        </div>

        <div className="tip-amount">
        <input 
        type="radio" 
        name="tip" 
        id="tip" 
        value=".5" 
        onChange={handleSelectedTip}
        />
        <div className="tip-btn">
            50%
        </div>
        </div>
        <input type="number" className="tip-custom" />
      </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label 
          className="label" 
          htmlFor="people">
            Number of people
          </label>
          <p className="error">
            {showPeepsError ? "Please enter numbers only" : ""}
          </p>
        </div>
        <input type="number" id="people" name="people" onInput={handlePeepsInput} value={peeps} />
      </div>
    </div>
  );
};

export default Form;
