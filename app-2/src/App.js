import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: ["This", "Is", "A", "List"]
    }
  }

  render() {
    let h2 = this.state.list.map((item, i) => <h2 key={i}>{item}</h2>)

    return (
      <div className="App">
        {h2}
      </div>
    );
  }
}

export default App;
