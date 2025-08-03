import React from 'react';

export default function Game() {
  // -------------------------------
  // |                             |
  // |          Round 1            |
  // |                             |
  // -------------------------------
  const player1 = "good";
  const player2 = "good";
  const player3 = "gut";
  const player4 = "good";
  const player5 = "good";
  const player6 = "good";
  // -------------------------------
  // |                             |
  // |          Round 2            |
  // |                             |
  // -------------------------------

  const player7 = "";
  const player8 = "";
  const player9 = "";
  const player10 = "";
  const player11 = "";
  const player12 = "";
  // -------------------------------
  // |                             |
  // |          Round 3            |
  // |                             |
  // -------------------------------

  const player13 = "";
  const player14 = "";
  const player15 = "";
  const player16 = "";
  const player17 = "";
  const player18 = "";
  // -------------------------------
  // |                             |
  // |          Round 4            |
  // |                             |
  // -------------------------------

  const player19 = "";
  const player20 = "";
  const player21 = "";
  const player22 = "";
  const player23 = "";
  const player24 = "";
  // -------------------------------
  // |                             |
  // |          Round 5            |
  // |                             |
  // -------------------------------

  const player25 = "";
  const player26 = "";
  const player27 = "";
  const player28 = "";
  const player29 = "";
  const player30 = "";

  // สร้างฟังก์ชันแสดงผู้เล่นแบบรวม
  const renderPlayers = (players: string[]) => (
    <div className="flex h-16 mb-4">
      {players.map((p, index) => (
        <div
          key={index}
          className={`flex-1 flex items-center justify-center text-white text-lg font-bold ${p === "good" ? "bg-blue-500" : p === "bad" ? "bg-red-500" : "bg-white"
            }`}
        >
          {p || "?"}
        </div>

      ))}
    </div>
  );

const getTeamStatus = ([A, B, C, D,E, F]: string[]) => {
  if ([A, B, C, D,E,F].some(p => p === "bad")) {
    return "bad team win";
  } else if ([A, B, C, D,E,F].every(p => p === "good")) {
    return "good team win";
  } else {
    return "";
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 1</h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player1, player2, player3, player4, player5, player6])}</h1>
      {renderPlayers([player1, player2, player3, player4, player5, player6])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 2</h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player7, player8, player9, player10, player11, player12])}</h1>
      {renderPlayers([player7, player8, player9, player10, player11, player12])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 3</h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player13, player14, player15, player16, player17, player18])}</h1>
      {renderPlayers([player13, player14, player15, player16, player17, player18])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 4</h1>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player19, player20, player21, player22, player23, player24])}</h1>
      {renderPlayers([player19, player20, player21, player22, player23, player24])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 5</h1>
      <p className="mb-2 text-black">{getTeamStatus([player25, player26, player27, player28, player29, player30])}</p>
      {renderPlayers([player25, player26, player27, player28, player29, player30])}   
    </div>
  );
}
