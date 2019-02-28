import React from "react";
import ReactDOM from "react-dom";
import ChannelComponent from "./Client/ChannelComponent";
import EditorComponent from "./Client/EditorComponent";
import MessageBoardComponent from "./Client/MessageBoardComponent";
import NavbarComponent from "./Client/NavbarComponent";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      messages: [],
      selectedId: ""
    };
    this.selectChannel = this.selectChannel.bind(this);
    this.disableDispaly = this.disableDispaly.bind(this);
  }

  //called when selecting channel
 async selectChannel(id) {
    const response = await fetch('http://localhost:8080/channelApi/messages/'+id);
    const json = await response.json();

    this.setState({ selectedId: id, messages:json[0].messages });
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8080/channelApi/channels');
    const json = await response.json();
    let stateObject = {channels : json};
    this.setState(stateObject);
    
  }

  disableDispaly(){
    let style = this.state.selectedId ? {opacity: 1} :{opacity: 0.5, backgroundColor:'#000'} 
    return style; 
  }

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <ChannelComponent channels={this.state.channels} selectChannel={this.selectChannel} />
            </div>
            <div className="col-sm-4">
              <MessageBoardComponent
                messages={this.state.messages}
              />
            </div>
            <div className="col-sm-4" style={this.disableDispaly()}>
              <EditorComponent selectedId={this.state.selectedId} selectChannel={this.selectChannel}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
