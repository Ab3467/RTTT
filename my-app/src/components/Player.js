 import React,{useState} from 'react'

export default function Player(props) {
const [editbtn,seteditbtn]=useState(false)

const EditBtn= ()=>{
    seteditbtn(!editbtn)
}

let Playername;
if(!editbtn){
     Playername= <span className="player-name">{props.player} </span>
}
else{
   Playername = <input placeholder="Player Name" type='text' required /> 
}
    return (
    <li>
        <span className="player">
        {Playername}
        <span className="player-symbol">{props.symbol}</span>
        </span>
        <span><button onClick={EditBtn}>{editbtn ? "save": "edit"}</button></span>
    </li>
    
    
    )
}
