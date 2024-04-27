import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
function App() {
   const [gameturn,setgameturn]= useState([]);
  const [ActivePlayer,setActive]=useState();
  const handleSelectSquare=(rowIndex,colIndex)=>{
     setActive((currActive)=> currActive==='X'?'O':'X')
     setgameturn((prevTurns)=>{

      let currPlayer = 'X';
      if(prevTurns.length > 0 &&  prevTurns[0].Player==='X'){
        currPlayer='O';
      }
      const updatedTurns = [{square:{row: rowIndex,col:colIndex},Player:currPlayer  },...prevTurns];
      return updatedTurns
     });
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