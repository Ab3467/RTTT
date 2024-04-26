
function App() {
  

  return (
   <>
   <main>
    <div id="game-container" >
    <ol id="players">
     <li>
      <span className="player">
      <span className="player-name">Player 1</span>
      <span className="player-symbol">X</span>
      </span>
      <span><button>Edit</button></span>
     </li>
     <li>
      <span className="player-name">Player 2</span>
      <span className="player-symbol">O</span>
     </li>
    </ol>
    Game Board
    </div>
   </main>
   </>
  )
}

export default App