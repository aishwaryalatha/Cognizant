import React, { useState } from 'react';

function UserPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (from && to && date) {
      setSuccess(true);
    }
  };

  return (
    <div>
      <h2>Welcome User!</h2>
      <p>Book your ticket below:</p>

      <form onSubmit={handleBooking}>
        <div>
          <label>From: </label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>

        <div>
          <label>To: </label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Book Ticket</button>
      </form>

      {success && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          ✅ Ticket booked from <strong>{from}</strong> to <strong>{to}</strong> on <strong>{date}</strong>!
        </div>
      )}
    </div>
  );
}

export default UserPage;
