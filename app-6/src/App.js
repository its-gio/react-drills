import React from 'react';
import './App.css';
import List from "./component/List.jsx"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleInput(e) {
    this.setState({ userInput: e.target.value })
  }

  handleAdd() {
    this.setState(currState => {
      let list = currState.list.concat(currState.userInput);
      return {
        list,
        userInput: ''
      }
    })
  }

  render() {
    let para = this.state.list.map((item, i) => <List key={i} list={item} />)
    return (
      <div className="App">
        <h1>Todo List</h1>
        <input onChange={this.handleInput} value={this.state.userInput} type="text" />
        <button onClick={this.handleAdd}>Add</button>
        { para }
      </div>
    );
  }
}

export default App;
