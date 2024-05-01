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




// Frontend:
// The frontend, also known as the client-side, is what users interact with directly. It includes everything a user sees, interacts with, and experiences on a website or web application.
// Frontend technologies typically include HTML (Hypertext Markup Language) for structure, CSS (Cascading Style Sheets) for styling, and JavaScript for interactivity.
// Frontend developers focus on creating an engaging user interface (UI) and ensuring a smooth user experience (UX). They work on designing layouts, implementing features, and optimizing performance for various devices and browsers.
// Backend:
// The backend, also known as the server-side, is responsible for behind-the-scenes functionality that powers the frontend. It handles tasks such as data storage, retrieval, processing, and business logic.
// Backend technologies often include programming languages like Python, Ruby, Java, PHP, and frameworks like Node.js, Django, Ruby on Rails, etc.
// Backend developers focus on server-side logic, databases, APIs (Application Programming Interfaces), and integrations with other services. They ensure that data is securely stored, processed, and delivered to the frontend as needed.