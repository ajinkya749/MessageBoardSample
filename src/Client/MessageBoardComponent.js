import React from "react";
import ReactDOM from "react-dom";

function MessageBoardComponent(props) {
  return (  
    <ul className="list-group">
      {props.messages.map(item => (
        <li className="list-group-item list-group-item-success" key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default MessageBoardComponent;
