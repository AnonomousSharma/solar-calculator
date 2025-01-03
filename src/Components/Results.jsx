import React from "react";

const Results = ({ results, onOpenDisclaimer, language }) => {
  if (!results) {
    return (
      <div className="results">
        <h2>{language === "en" ? "Results" : "परिणाम"}</h2>
        <p>{language === "en" ? "No input data yet. Please enter values to see the results." : "कोई डेटा नहीं है। कृपया परिणाम देखने के लिए मान दर्ज करें।"}</p>
      </div>
    );
  }

  return (
    <div className="results">
      <h2>{language === "en" ? "Solar Panel Installation Results" : "सोलर पैनल इंस्टॉलेशन परिणाम"}</h2>
      <ul>
        <li>{language === "en" ? "Solar Capacity: " : "सोलर क्षमता: "}<strong>{results.solarCapacity} kW</strong></li>
        <li>{language === "en" ? "Required Area for Solar: " : "सोलर के लिए आवश्यक क्षेत्र: "}<strong>{results.area} sq. ft.</strong></li>
        <li>{language === "en" ? "Monthly Unit Production: " : "मासिक उत्पादन: "}<strong>{results.monthlyProduction} units</strong></li>
        <li>{language === "en" ? "Off-Grid Installation Cost: " : "ऑफ-ग्रिड इंस्टॉलेशन लागत: "}<strong>₹{results.offGridCost}</strong></li>
        <li>{language === "en" ? "On-Grid Installation Cost: " : "ऑन-ग्रिड इंस्टॉलेशन लागत: "}<strong>₹{results.onGridCost}</strong></li>
      </ul>
      <button onClick={onOpenDisclaimer}>{language === "en" ? "View Disclaimer" : "डिस्क्लेमर देखें"}</button>
    </div>
  );
};

export default Results;
