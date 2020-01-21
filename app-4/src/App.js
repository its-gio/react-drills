import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      usename: "",
      password: ""
    }

    this.handleInput = this.handleInput.bind(this)
    this.showAlert = this.showAlert.bind(this)
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showAlert() {
    alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput} name="username" placeholder="username"></input>
        <input onChange={this.handleInput} name="password" placeholder="password" type="password"></input>
        <button onClick={this.showAlert}>Submit</button>
      </div>
    );
  }
}

export default App;
