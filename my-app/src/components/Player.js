 import React from 'react'

export default function Player(props) {
    return (
        <div>
        <li>
        <span className="player">
        <span className="player-name">{props.player}
        </span>
        <span className="player-symbol">{props.symbol}</span>
        </span>
        <span><button>Edit</button></span>
        </li>
        <li></li>
        </div>
    )
}
