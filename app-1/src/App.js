import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "This be a test"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.text} type="text"/>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
