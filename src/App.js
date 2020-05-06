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
    <form onSubmit={onSubmit}>
      <div>
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
        <button type="submit">Calculate!</button>

        <p>Your should tip: £{tip}</p>
      </div>
    </form>
  );
};

export default App;
