import React,{useState} from 'react'

const Borad = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard() {
const [symbol,setSymbol]= useState('X') 
const BtnControl=()=>{
    setSymbol(symbol ? 'O': 'X');
}

  return (
    <ol id='game-board'>
      {Borad.map((row,rowIndex)=> <li key={rowIndex}>

      <ol>
        {row.map((plySymbol,colIndex)=>
        <li key={colIndex}>
            <button onClick={BtnControl}>
            {symbol}
            </button>
        </li>
        )}
      </ol>

      </li>)}
    </ol>
  )
}
