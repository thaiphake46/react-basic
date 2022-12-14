import React from "react";
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  state = {
    name: 'huy thai',
    age: 20
  }

  handleOnChangeName = (e) => {
    this.setState = {
      name: e.target.value
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
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
