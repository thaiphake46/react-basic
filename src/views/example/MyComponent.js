import React from "react";
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  state = {
    updatable: true,
    name: 'huy thai',
    age: 20
  }

  handleOnChangeName = (e) => {
    this.setState = {
      updatable: true,
      name: e.target.value
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            id="id"
            className="form_control"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>
        <div>
          My name is {this.state.name}
        </div>
      </div>
    )
  }
}

export default MyComponent