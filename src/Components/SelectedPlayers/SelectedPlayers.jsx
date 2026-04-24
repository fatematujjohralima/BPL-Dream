
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({ selectedPlayerData, removePlayer }) => {
    
    console.log(selectedPlayerData)
    return (
        <div className='max-w-5xl mx-auto'>
            {
                selectedPlayerData.map(player => <SelectedCard player={player} removePlayer={removePlayer} ></SelectedCard>)
                
            } 
            
        </div>
    );
};

export default SelectedPlayers;