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
        <li>
            <button>
                
            </button>
        </li>
      </ol>

      </li>
         
      )}
    </ol>
  )
}
