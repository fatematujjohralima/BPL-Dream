
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense } from 'react'

 const availablePlayers=fetch('/players.json')
.then(res => res.json())

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback='Loading...'>
      <AvailablePlayers availablePlayers={availablePlayers} ></AvailablePlayers>
    </Suspense>
    
    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
