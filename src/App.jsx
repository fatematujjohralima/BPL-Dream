
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense, useState } from 'react'

 const availablePlayers=fetch('/players.json')
.then(res => res.json())

function App() {
  const [toggle,setToggle]=useState(true)
 

  return (
    <>
    <Navbar></Navbar>

    <div className=' max-w-5xl mx-auto flex justify-between items-center font-bold'>
      <h1>Available Players</h1>
      <div>
        <button  onClick={() => setToggle(true)} className={`py-3 px-5 border-1 border-gray-200 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":''}`}>Available</button>
        <button onClick={() => setToggle(false)} className={`py-3 px-5 border-1 border-gray-200 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":''}`}>Selected <span>(0)</span></button>
      </div>
    </div>

    {
      toggle===true?<Suspense fallback='Loading...'>
      <AvailablePlayers availablePlayers={availablePlayers} ></AvailablePlayers>
    </Suspense>:<SelectedPlayers></SelectedPlayers>
    }

    
    
    
    </>
  )
}

export default App
