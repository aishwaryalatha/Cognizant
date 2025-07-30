import React from "react";

const IndianPlayers = () => {
  const T20players = ["Rohit", "Virat", "Surya", "Hardik", "Gill"];
  const RanjiTrophyplayers = ["Pujara", "Rahane", "Shreyas", "Ishan", "Prithvi"];

  // Destructure even and odd index players
  const evenT20 = T20players.filter((_, index) => index % 2 === 0);
  const oddRanji = RanjiTrophyplayers.filter((_, index) => index % 2 !== 0);

  // Merge the arrays
  const allPlayers = [...evenT20, ...oddRanji];

  return (
    <div>
      <h2>🇮🇳 Indian Players</h2>
      <p><strong>Even index T20 players:</strong> {evenT20.join(", ")}</p>
      <p><strong>Odd index Ranji Trophy players:</strong> {oddRanji.join(", ")}</p>
      <h3>Merged Players List:</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
