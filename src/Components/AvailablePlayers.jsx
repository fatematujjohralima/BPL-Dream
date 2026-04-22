import React, { use } from "react";
import peoplelogo from '../assets/user1.png'
import flag1 from '../assets/report1.png'


const AvailablePlayers = ({ availablePlayers }) => {
  const players = use(availablePlayers);
  console.log(players);
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {
            players.map(player => <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
          className="w-full h-75 object-cover"
            src={player.playerImage}
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img src={peoplelogo} alt="" /> 
            <h2 className="card-title ml-2"> 
                {player.playerName}
            </h2>
          </div>
          
          <div className="flex justify-between mb-4 mt-4 border-b-1 border-gray-300 pb-4">
            <div className="flex items-center ">
            <img className="w-4 h-4" src={flag1} alt="" />
            <span className="ml-2">{player.playerCountry}</span>
          </div>
          <div>
            <button className="btn">All Rounder</button>
          </div>
          </div>

          <div className="flex justify-between font-bold">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>

          <div className="flex justify-between ">
            <span className="font-bold">{player.battingStyle}</span>
            <span>{player.bowlingStyle}</span>
          </div>



          <div className="card-actions flex justify-between items-center mt-4">
            <p className="font-bold">Price: ${player.price}</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>)
        }


      
    </div>
  );
};

export default AvailablePlayers;
