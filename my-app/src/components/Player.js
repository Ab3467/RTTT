import React, { useState } from 'react';

export default function Player(props) {
  const [name, setName] = useState(props.playerName);
  const [editBtn, setEditBtn] = useState(false);

  const editBtnHandler = () => {
    setEditBtn(editing => !editing);
  };

  const handleChange = event => {
    setName(event.target.value);
  };

  let playerName;
  if (!editBtn) {
    playerName = <span className="player-name">{name}</span>;
  } else {
    playerName = (
      <input
        placeholder="Player Name"
        type="text"
        required
        value={name}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={props.isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <span>
        <button onClick={editBtnHandler}>{editBtn ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}
