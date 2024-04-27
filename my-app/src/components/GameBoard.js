const Board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
export default function GameBoard({onSelectSquare,turns}) {
let gameBoard = Board;
  for(let turn of turns){
    const { square, Player} = turn;
    const {row,col}= square; 

    gameBoard[row][col]=Player;
  }

// const [gameBoard,setgameBoard]= useState(Borad) 
// const BtnControl=(rowIndex,colIndex)=>{
//     setgameBoard((prevGameBoard)=>{
//         const updatedboard= [...prevGameBoard.map(innerArray=>[...innerArray])];
//         updatedboard[rowIndex][colIndex]= ActivePlySymbol;
//         return updatedboard;
//      })
//      onSelectSquare();
// }

  return (
    <ol id='game-board'>
      {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>

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
