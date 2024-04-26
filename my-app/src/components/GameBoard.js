import React from 'react'

const Borad = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]


export default function GameBoard() {
  return (
    <ol id='game-board'>
      {Borad.map((row,rowIndex)=> <li key={rowIndex}>

      <ol>
        {row.map((plySymbol,colIndex)=>
        <li key={colIndex}>
            <button>
            {plySymbol}
            </button>
        </li>
        )}
      </ol>

      </li>)}
    </ol>
  )
}
