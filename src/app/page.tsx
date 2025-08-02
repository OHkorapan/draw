import React from 'react';

export default function Game() {
  // -------------------------------
  // |                             |
  // |          Round 1            |
  // |                             |
  // -------------------------------
  const player1 = "bad";
  const player2 = "bad";
  const player3 = "good";
  const player4 = "good";
  // -------------------------------
  // |                             |
  // |          Round 2            |
  // |                             |
  // -------------------------------

  const player5 = "good";
  const player6 = "bad";
  const player7 = "bad";
  const player8 = "good";
  // -------------------------------
  // |                             |
  // |          Round 3            |
  // |                             |
  // -------------------------------

  const player9 = "bad";
  const player10 = "bad";
  const player11 = "bad";
  const player12 = "bad";
  // -------------------------------
  // |                             |
  // |          Round 4            |
  // |                             |
  // -------------------------------

  const player13 = "good";
  const player14 = "good";
  const player15 = "good";
  const player16 = "good";
  // -------------------------------
  // |                             |
  // |          Round 5            |
  // |                             |
  // -------------------------------

  const player17 = "bad";
  const player18 = "good";
  const player19 = "good";
  const player20 = "bad";

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

const getTeamStatus = ([A, B, C, D]: string[]) => {
  if ([A, B, C, D].some(p => p === "bad")) {
    return "bad team win";
  } else if ([A, B, C, D].every(p => p === "good")) {
    return "good team win";
  } else {
    return "";
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player1, player2, player3, player4])}</h1>
      {renderPlayers([player1, player2, player3, player4])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player5, player6, player7, player8])}</h1>
      {renderPlayers([player5, player6, player7, player8])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player9, player10, player11, player12])}</h1>
      {renderPlayers([player9, player10, player11, player12])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">{getTeamStatus([player13, player14, player15, player16])}</h1>
      {renderPlayers([player13, player14, player15, player16])}

      <h1 className="text-2xl font-bold text-gray-800 mb-4">Team 5</h1>
      <p className="mb-2 text-black">{getTeamStatus([player17, player18, player19, player20])}</p>
      {renderPlayers([player17, player18, player19, player20])}

      {/* Main content area */}
      <div className="p-8 bg-white shadow rounded mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Main Content Area</h2>
        <p className="text-gray-600">
          This is the main content area below the colored header sections. You can add your page content here.
        </p>
      </div>
    </div>
  );
}
