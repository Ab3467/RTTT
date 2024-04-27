import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import Player from "./components/Player"
import { WINNING_COMBINATION } from "./components/Combination";

const Board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveActiveTurns (gameturn){
  let currPlayer = 'X';
   if(gameturn.length > 0 &&  gameturn[0].Player==='X'){
     currPlayer='O';
   }
   return currPlayer
}
function App() {
   const [gameturn,setgameturn]= useState([]);
  
   const ActivePlayer = deriveActiveTurns(gameturn)
   let gameBoard = Board;
  for(let turn of gameturn){
    const { square, Player} = turn;
    const {row,col}= square; 

    gameBoard[row][col]=Player;
  }

  let winner;
   for(const combination of WINNING_COMBINATION){
    const firstBlockSymbol = gameBoard[combination[0].row][combination[0].col];
    const SecondBlockSymbol = gameBoard[combination[1].row][combination[1].col];
    const ThirdBlockSymbol = gameBoard[combination[2].row][combination[2].col];

    if(firstBlockSymbol && firstBlockSymbol === SecondBlockSymbol && firstBlockSymbol === ThirdBlockSymbol){
      winner = firstBlockSymbol;
    }
   }

  const handleSelectSquare=(rowIndex,colIndex)=>{
   setgameturn((prevTurns)=>{
      let currPlayer = 'X';
   if(prevTurns.length > 0 &&  prevTurns[0].Player==='X'){
     currPlayer='O';
   }
      const updatedTurns = [{square:{row: rowIndex,col:colIndex},Player:currPlayer  },...prevTurns];
      return updatedTurns;
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

       {winner && <p>Player {winner} won !</p>}
     <GameBoard onSelectSquare={handleSelectSquare} 
     board={gameBoard }/>
     </div>
     <Log turns={gameturn}/>
   </main>
   </>
  )
}

export default App