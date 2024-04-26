import React,{useState} from 'react'

const Borad = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard() {
const [gameBoard,setgameBoard]= useState(Borad) 
const BtnControl=(rowIndex,colIndex)=>{
    setgameBoard((prevGameBoard)=>{

    })
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
