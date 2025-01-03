import React from "react";

const DisclaimerModal = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{language === "en" ? "Solar Installation Disclaimer" : "सोलर इंस्टॉलेशन डिस्क्लेमर"}</h2>
        <p>{language === "en" ? "The solar installation cost and capacity calculations are estimations based on standard conditions." : "सोलर इंस्टॉलेशन लागत और क्षमता गणना मानक शर्तों पर आधारित अनुमान हैं।"}</p>
        <ul>
          <li>{language === "en" ? "Actual prices may vary depending on rooftop height, location, and specific conditions." : "वास्तविक मूल्य छत की ऊँचाई, स्थान और विशेष शर्तों के आधार पर भिन्न हो सकते हैं।"}</li>
          <li>{language === "en" ? "Costs may differ based on solar panel brand and customer requirements." : "लागत सोलर पैनल ब्रांड और ग्राहक आवश्यकताओं के आधार पर भिन्न हो सकती है।"}</li>
          <li>{language === "en" ? "Additional charges, such as transportation, will be borne by the customer." : "परिवहन जैसे अतिरिक्त शुल्क ग्राहक द्वारा वहन किए जाएंगे।"}</li>
        </ul>
        <p>{language === "en" ? "Contact our experts at +91 95875 14401 for precise quotes and assistance." : "सटीक उद्धरण और सहायता के लिए हमारे विशेषज्ञों से +91 95875 14401 पर संपर्क करें।"}</p>
        <button onClick={onClose}>{language === "en" ? "Close" : "बंद करें"}</button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
