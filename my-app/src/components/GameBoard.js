import React,{useState} from 'react'

const Borad = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({onSelectSquare,ActivePlySymbol}) {
const [gameBoard,setgameBoard]= useState(Borad) 
const BtnControl=(rowIndex,colIndex)=>{
    setgameBoard((prevGameBoard)=>{
        const updatedboard= [...prevGameBoard.map(innerArray=>[...innerArray])];
        updatedboard[rowIndex][colIndex]= ActivePlySymbol;
        return updatedboard;
     })
     onSelectSquare();
}

  return (
    <ol id='game-board'>
      {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>

      <ol>
        {row.map((plySymbol,colIndex)=>
        <li key={colIndex}>
            <button onClick={()=>BtnControl(rowIndex,colIndex)}>
            {plySymbol}
            </button>
        </li>
        )}
      </ol>

      </li>)}
    </ol>
  )
}
