
export default function GameBoard({onSelectSquare,board}) {
 return (
    <ol id='game-board'>
      {board.map((row,rowIndex)=> <li key={rowIndex}>

      <ol>
        {row.map((plySymbol,colIndex)=>
        <li key={colIndex}>
            <button onClick={()=>onSelectSquare(rowIndex,colIndex )} disabled={plySymbol != null}>
            {plySymbol}
            </button>
        </li>
        )}
      </ol>

      </li>)}
    </ol>
  )
}
