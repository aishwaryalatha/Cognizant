import React from 'react';

function App() {
  const offices = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "MG Road, Bangalore",
      image: "https://via.placeholder.com/300x200"
    },
    {
      name: "CityHub Tower",
      rent: 62000,
      address: "Andheri East, Mumbai",
      image: "https://via.placeholder.com/300x200"
    },
    {
      name: "Startup Square",
      rent: 45000,
      address: "Salt Lake, Kolkata",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <div>
      <h1>Office Space Rental</h1>
      {offices.map((office, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "20px", padding: "10px" }}>
          <img src={office.image} alt={office.name} style={{ width: "300px", height: "200px" }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

