import React from "react";
import ReactDOM from "react-dom";

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write your message."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    const obj = {
      message:this.state.value
    }
    event.preventDefault();
    const response = await fetch("http://localhost:8080/channelApi/updateChannel/"+this.props.selectedId,{
      method:'PUT',
      headers:{
          "Content-Type":'application/json'
      },
      body:JSON.stringify(obj)
    });
    const json = await response.json();
    this.props.selectChannel(this.props.selectedId);
    alert("your message was submitted sucessfully: " + this.state.value);
  }

  render() {
    return (
      this.props.selectedId ? (
        <form onSubmit={this.handleSubmit} className="form-group">
          <label htmlFor="comment">
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              className="form-control"
              rows="5"
              id="comment"
            />
          </label>
          <input type="submit" value="Submit" type="button" className="btn btn-primary" />
        </form>
      ) : (
        <h4>Select a Channel</h4>
      )
    );
  }
}

export default EditorComponent;
