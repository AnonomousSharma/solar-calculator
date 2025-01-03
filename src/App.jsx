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
  const [language, setLanguage] = useState("en");

  const handleInputChange = (field, value) => {
    let newInputs = { ...inputs, [field]: value };

    if (field === "billAmount") {
      if (value) {
        const solarCapacity = Math.round(value / 1000);
        const area = Math.round(solarCapacity * 64);
        newInputs.solarCapacity = solarCapacity;
        newInputs.area = area;
      } else {
        newInputs.solarCapacity = "";
        newInputs.area = "";
      }
    } else if (field === "solarCapacity") {
      const area = Math.round(value * 64);
      newInputs.area = area;
    } else if (field === "area") {
      newInputs.area = value;
    }

    setInputs(newInputs);

    if (newInputs.solarCapacity) {
      setResults({
        solarCapacity: newInputs.solarCapacity,
        area: newInputs.area,
        monthlyProduction: Math.round(newInputs.solarCapacity * 150),
        offGridCost: Math.round(newInputs.solarCapacity * 55000),
        onGridCost: Math.round(newInputs.solarCapacity * 50000),
      });
    } else {
      setResults(null);
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const switchToEnglish = () => {
    setLanguage("en");
  };

  const switchToHindi = () => {
    setLanguage("hi");
  };

  return (
    <div className="app">
      <h1>{language === "en" ? "Solar Panel Installation Calculator" : "सोलर पैनल इंस्टॉलेशन कैलकुलेटर"}</h1>
      <div className="language-toggle-buttons">
        <button onClick={switchToEnglish}>{language === "en" ? "Already in English" : "Switch to English"}</button>
        <button onClick={switchToHindi}>{language === "hi" ? "Already in हिंदी" : "Switch to हिंदी"}</button>
      </div>
      
      
      <div className="calculator-results">
        <Calculator inputs={inputs} onInputChange={handleInputChange} language={language} />
        <Results results={results} onOpenDisclaimer={toggleModal} language={language} />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <DisclaimerModal isOpen={isModalOpen} onClose={toggleModal} language={language} />
    </div>
  );
};

export default App;
