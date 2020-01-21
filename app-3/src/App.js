import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      UnfilturedList: ["milk", "cereal", "eggs", "broccli", "noodles", "chicken", "bread"],
    }

    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    let filtered = this.state.UnfilturedList
                      .filter(item => item.includes(this.state.userInput))
                      .map((item, i) => <h2 key={i}>{item}</h2>)
    return (
      <div className="App">
        <input value={this.state.userInput} onChange={this.handleFilter} type="text" />
        {filtered}
      </div>
    );
  }
}

export default App;
