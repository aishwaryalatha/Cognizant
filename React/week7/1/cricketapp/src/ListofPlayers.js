import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Rohit Sharma", score: 85 },
    { name: "Virat Kohli", score: 92 },
    { name: "KL Rahul", score: 67 },
    { name: "Shubman Gill", score: 44 },
    { name: "Hardik Pandya", score: 75 },
    { name: "Ravindra Jadeja", score: 53 },
    { name: "MS Dhoni", score: 99 },
    { name: "Jasprit Bumrah", score: 30 },
    { name: "Kuldeep Yadav", score: 48 },
    { name: "Mohammed Shami", score: 29 },
    { name: "Surya Kumar", score: 88 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3> Players with score less than 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
