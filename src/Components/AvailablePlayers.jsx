import React, { use } from "react";

import PlayerCard from "./PlayerCard/PlayerCard";


const AvailablePlayers = ({ availablePlayers ,setAvailableBalance ,availableBalance, selectedPlayerData, setSelectedPlayerData }) => {
  const players = use(availablePlayers);
  console.log(players);
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
            players.map(player => <PlayerCard player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} selectedPlayerData={selectedPlayerData} setSelectedPlayerData={setSelectedPlayerData}/>)
        }


      
    </div>
  );
};

export default AvailablePlayers;
