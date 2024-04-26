import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
function App() {

  const [ActivePlayer,setActive]=useState();
  const handleSelectSquare=()=>{
     setActive((currActive)=> currActive==='X'?'O':'X')
  }
  

  return (
   <>
   <main>
     <div id="game-container">
      <ol id="players" className='highlight-player'>
       <Player playerName="Player 1" symbol="X" isActive={ActivePlayer==='X'}/>
       <Player playerName="Player 2" symbol="O" isActive={ActivePlayer==='O'}/>
      </ol>
     <GameBoard onSelectSquare={handleSelectSquare} ActivePlySymbol={ActivePlayer}/>
     </div>
   </main>
   </>
  )
}

export default App