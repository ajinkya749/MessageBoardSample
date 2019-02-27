import React from "react";
import ReactDOM from "react-dom";

class ChannelComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.selectChannel(id);
  }

  render() {
    return (
      <ul className="list-group">
        {this.props.channels.map(item => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => this.handleClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default ChannelComponent;
