import React from "react";

const Results = ({ results, onOpenDisclaimer }) => {
  if (!results) {
    return (
      <div className="results">
        <h2>Results</h2>
        <p>No input data yet. Please enter values to see the results.</p>
      </div>
    );
  }

  return (
    <div className="results">
      <h2>Solar Panel Installation Results</h2>
      <ul>
        <li>Solar Capacity: <strong>{results.solarCapacity} kW</strong></li>
        <li>Required Area for Solar: <strong>{results.area} sq. ft.</strong> </li>
        <li>Monthly Unit Production:  <strong>{results.monthlyProduction} units</strong> </li>
        <li>Off-Grid Installation Cost: <strong>₹{results.offGridCost}</strong> </li>
        <li>On-Grid Installation Cost: <strong>₹{results.onGridCost}</strong></li>
      </ul>
      <button onClick={onOpenDisclaimer}>View Disclaimer</button>
    </div>
  );
};

export default Results;
