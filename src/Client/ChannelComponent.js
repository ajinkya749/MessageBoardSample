import React from "react";
import ReactDOM from "react-dom";

function ChannelComponent(props){
    return props.channels ? (
      <ul className="list-group">
        {props.channels.map(item => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => props.selectChannel(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    ) : null;
}

export default ChannelComponent;
