import React, { useState } from "react";
import Calculator from "./Components/Calculator";
import Results from "./Components/Results";
import DisclaimerModal from "./Components/DisclaimerModal";
import "./styles/styles.css";
import logo from "./assets/logo.png";

const App = () => {
  const [inputs, setInputs] = useState({
    billAmount: "",
    solarCapacity: "",
    area: "",
  });
  const [results, setResults] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleInputChange = (field, value) => {
    let newInputs = { ...inputs, [field]: value };

    if (field === "billAmount") {
      // Calculate Solar Capacity and Area based on Bill Amount
      if (value) {
        const solarCapacity = (value / 600).toFixed(2); // Example: ₹600 = 1 kW
        const area = (solarCapacity * 64).toFixed(2); // 64 sq. ft per kW
        newInputs.solarCapacity = solarCapacity;
        newInputs.area = area;
      } else {
        newInputs.solarCapacity = "";
        newInputs.area = "";
      }
    } else if (field === "solarCapacity") {
      // If Solar Capacity is changed directly, only update the area
      const area = (value * 64).toFixed(2); // 64 sq. ft per kW
      newInputs.area = area;
    } else if (field === "area") {
      // If Area is changed, we don't change solarCapacity and billAmount directly
      newInputs.area = value;
    }

    setInputs(newInputs);

    if (newInputs.solarCapacity) {
      setResults({
        solarCapacity: newInputs.solarCapacity,
        area: newInputs.area,
        monthlyProduction: (newInputs.solarCapacity * 150).toFixed(2), // Assumed monthly production per kW
        offGridCost: (newInputs.solarCapacity * 50000).toFixed(0), // ₹50,000 per kW
        onGridCost: (newInputs.solarCapacity * 45000).toFixed(0), // ₹45,000 per kW
      });
    } else {
      setResults(null);
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="app">
      <h1>Solar Panel Installation Calculator</h1>
      <div className="calculator-results">
        <Calculator inputs={inputs} onInputChange={handleInputChange} />
        <Results results={results} onOpenDisclaimer={toggleModal} />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <DisclaimerModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default App;
