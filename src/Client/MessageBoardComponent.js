import React from "react";
import ReactDOM from "react-dom";

function MessageBoardComponent(props) {
  return (  
    <ul className="list-group">
      {props.messages.map(item => (
        <li className="list-group-item" key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default MessageBoardComponent;
