import React from "react";

const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Solar Installation Disclaimer</h2>
        <p>The solar installation cost and capacity calculations are estimations based on standard conditions.</p>
        <ul>
          <li>Actual prices may vary depending on rooftop height, location, and specific conditions.</li>
          <li>Costs may differ based on solar panel brand and customer requirements.</li>
          <li>Additional charges, such as transportation, will be borne by the customer.</li>
        </ul>
        <p>Contact our experts at +91 95875 14401 for precise quotes and assistance.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
