 import React,{useState} from 'react'

export default function Player(props) {
const [name,setname] = useState(props.playerName);
const [editbtn,seteditbtn]=useState(false)

const EditBtn= ()=>{
    seteditbtn((editing)=> !editing)
}
const handleChange=(event)=>{
    setname(event.target.value)
}

let Playername;
if(!editbtn){
     Playername= <span className="player-name">{name} </span>
}
else{
   Playername = <input placeholder="Player Name" type='text' required value={name} onChange={handleChange}/> 
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
