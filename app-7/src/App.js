import React from 'react';
import NewTask from "./components/NewTask.jsx"
import List from "./components/List.jsx"
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      list: ["milk", "cheese", "eggs", "pancake mix"]
    }
  }

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value })
  }

  addToList = () => {
    this.setState(currState => {
      let list = currState.list.concat(currState.userInput);

      return {
        list,
        userInput: ""
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List Components:</h1>
        <NewTask userInput={this.state.userInput} handleUserInput={this.handleUserInput} addToList={this.addToList}  />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
