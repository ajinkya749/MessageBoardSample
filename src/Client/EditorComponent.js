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
    alert("An essay was submitted: " + this.state.value);
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
  }

  render() {
    return (
      this.props.selectedId ? (
        <form onSubmit={() => this.handleSubmit} className="form-group">
          <label htmlFor="comment">
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              class="form-control"
              rows="5"
              id="comment"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <h4>Select a Channel</h4>
      )
    );
  }
}

export default EditorComponent;
