import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import Player from "./components/Player"
import { WINNING_COMBINATION } from "./components/Combination";
import Gamedraw from "./components/Gamedraw";

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
   const [players,setPlayers]= useState({
    'X': 'Player 1',
    'O': 'player 2'
   })

   const ActivePlayer = deriveActiveTurns(gameturn)
   let gameBoard = [...Board.map(array=> [...array])];
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
      winner = players[firstBlockSymbol];
    }
   }

  const gameDraw  = gameturn.length === 9 && !winner;
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
  function handleStart(){
    setgameturn([]);
  }
  const handleChangeName=(symbol,newName)=>{
     setPlayers((prevPlayers)=>{
        return{
          ...prevPlayers,
          [symbol]: newName
        }
       })
      }
  return (
   <>
   <main>
     <div id="game-container">
      <ol id="players" className='highlight-player'>
      <Player initialName={players['X']} symbol="X" isActive={ActivePlayer==='X'} onChangeName={handleChangeName}/>
     <Player initialName={players['O']} symbol="O" isActive={ActivePlayer==='O'} onChangeName={handleChangeName}/>


 
      </ol>

       {(winner || gameDraw) && <Gamedraw winner={winner} onRestart={handleStart}/>}
     <GameBoard onSelectSquare={handleSelectSquare} 
     board={gameBoard }/>
     </div>
     <Log turns={gameturn}/>
   </main>
   </>
  )
}

export default App