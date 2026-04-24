import React from 'react';
import dltbtn from '../../assets/DELETE.png'

const SelectedCard = ({player ,removePlayer}) => {

const deletePlayer=()=>{
    removePlayer(player);
}

    return (
        <div>
            <div className='border-2 border-gray-400 p-4 rounded-2xl flex justify-between items-center mt-5'>
                    <div className='flex items-center'>
                        { <img className='h-12 w-12 rounded-2xl' src={player.playerImage} alt="" /> }
                        <div className='ml-2'>
                            <h1>{player.playerName}</h1>
                            <p className='text-xs'>{player.
playingRole
}</p>
                        </div>
                    </div>
                    <div>
                        <img onClick={deletePlayer} className='h-8 w-10' src={dltbtn} alt="" />
                    </div>
                </div>
            
        </div>
    );
};

export default SelectedCard;