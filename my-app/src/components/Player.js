import React,{useState} from "react";

function Player({ initialName, isActive, onChangeName, symbol }) {
  const [name, setName] = useState(initialName);
  const [editBtn, setEditBtn] = useState(false);

  const editBtnHandler = () => {
    setEditBtn(editing => !editing);
    onChangeName(symbol, name);
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
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <span>
        <button onClick={editBtnHandler}>{editBtn ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
}
export default Player;
