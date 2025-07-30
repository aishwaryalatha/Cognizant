import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <div>
          <UserPage />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <GuestPage />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;

