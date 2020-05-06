import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    let calculatedTip = (billAmount * 15) / 100;
    let totalTip = calculatedTip / people;
    setTip(totalTip);
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <h1 className="title">Tip Calculator</h1>
        <p>How much is your bill?</p>
        <input
          type="number"
          value={billAmount}
          required
          min="10"
          onChange={(e) => {
            setBillAmount(e.target.value);
          }}
        />
        <p>How many people?</p>
        <input
          type="number"
          value={people}
          required
          min="1"
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
        <button type="submit">Calculate</button>

        {tip > 0 && <p>You should tip: £{tip}</p>}
      </form>
    </div>
  );
};

export default App;
