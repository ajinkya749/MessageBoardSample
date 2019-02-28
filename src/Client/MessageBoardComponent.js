import React from "react";
import ReactDOM from "react-dom";

function MessageBoardComponent(props) {
  return (props.messages ? (
    <ul className="list-group">
      {props.messages.map(item => (
        <li className="list-group-item" key={item}>{item}</li>
      ))}
    </ul>
    ) : (
    <h4>Select a Channel</h4>
    )
  );
}

export default MessageBoardComponent;
