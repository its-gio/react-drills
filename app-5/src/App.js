import React from 'react';
import './App.css';
import ImageComp from './components/ImageComp.jsx';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      url: "http://via.placeholder.com/150"
    }
  }

  render () {
    return (
      <div className="App">
        <ImageComp url={this.state.url} />
      </div>
    );
  }
}

export default App;
