import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // assuming 1 Euro = 90 INR
    setEuro(euroValue);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in Rupees"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Converted Amount in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
