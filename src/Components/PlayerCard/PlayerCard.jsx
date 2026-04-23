import React, { useState } from 'react';
import peoplelogo from '../../assets/user1.png'
import flag1 from '../../assets/report1.png'

const PlayerCard = ({ player , setAvailableBalance, availableBalance }) => {
    const [isSelected,setIsSelected]=useState(false);
    
    return (
        <div className="card bg-base-100 shadow-sm p-4">
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
            <button 
  disabled={isSelected || availableBalance < player.price}
  onClick={() => {
    setIsSelected(true);
    setAvailableBalance(availableBalance - player.price);
  }} 
  className="btn"
>
  {isSelected 
    ? 'Selected' 
    : availableBalance < player.price 
      ? 'Not Enough Balance' 
      : 'Choose Player'}
</button>
          </div>
        </div>
      </div>
    );
};

export default PlayerCard;