import React from 'react'

export default function Gamedraw({winner,onRestart}) {
  return (
    <div id='game-over'>
      <h2>GAme Over</h2>
     {winner && <p>{winner} won!</p>}
     {!winner && <p>It's a Draw</p>}
     <p>
        <button onClick={onRestart}>Rematch!</button>
     </p>
    </div>
  )
}
