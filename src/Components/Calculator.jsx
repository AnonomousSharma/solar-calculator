import React from "react";

const Calculator = ({ inputs, onInputChange, language }) => {
  return (
    <div className="calculator">
      <h2>{language === "en" ? "Solar Calculator" : "सोलर कैलकुलेटर"}</h2>
      <div className="form-group">
        <label>{language === "en" ? "Monthly Bill Amount (₹):" : "मासिक बिल राशि (₹):"}</label>
        <input
          type="number"
          value={inputs.billAmount}
          onChange={(e) => onInputChange("billAmount", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>{language === "en" ? "Solar Capacity to Install (kW):" : "सोलर क्षमता (kW) इंस्टॉल करें:"}</label>
        <input
          type="number"
          value={inputs.solarCapacity}
          onChange={(e) => onInputChange("solarCapacity", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>{language === "en" ? "Required Area (sq. ft.):" : "आवश्यक क्षेत्र (वर्ग फीट):"}</label>
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
