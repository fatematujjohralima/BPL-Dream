import React from 'react';
import dltbtn from '../../assets/user1.png'

const SelectedCard = ({player}) => {
    return (
        <div>
            <div className='border-2 border-gray-400 p-4 rounded-2xl flex justify-between items-center'>
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
                        <img src={dltbtn} alt="" />
                    </div>
                </div>
            
        </div>
    );
};

export default SelectedCard;