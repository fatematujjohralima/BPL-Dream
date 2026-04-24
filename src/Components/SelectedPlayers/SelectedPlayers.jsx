import React, { use } from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({ selectedPlayerData }) => {
    
    console.log(selectedPlayerData)
    return (
        <div className='max-w-5xl mx-auto'>
            {
                selectedPlayerData.map(player => <SelectedCard player={player}></SelectedCard>)
                
            } 
            
        </div>
    );
};

export default SelectedPlayers;