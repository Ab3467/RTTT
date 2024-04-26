 import React,{useState} from 'react'

export default function Player(props) {
const [name,setname] = useState(playerName);
const [editbtn,seteditbtn]=useState(false)

const EditBtn= ()=>{
    seteditbtn((editing)=> !editing)
}
let Playername;
if(!editbtn){
     Playername= <span className="player-name">{props.playerName} </span>
}
else{
   Playername = <input placeholder="Player Name" type='text' required value={props.playerName} onChange={handleChange}/> 
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
