import React from "react";

const Calculator = ({ inputs, onInputChange }) => {
  return (
    <div className="calculator">
      <h2>Solar Calculator</h2>
      <div className="form-group">
        <label>Monthly Bill Amount (₹):</label>
        <input
          type="number"
          value={inputs.billAmount}
          onChange={(e) => onInputChange("billAmount", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Solar Capacity to Install (kW):</label>
        <input
          type="number"
          value={inputs.solarCapacity}
          onChange={(e) => onInputChange("solarCapacity", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Required Area (sq. ft.):</label>
        <input
          type="number"
          value={inputs.area}
          onChange={(e) => onInputChange("area", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Calculator;
