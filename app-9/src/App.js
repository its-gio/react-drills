import React from 'react';
import './App.css';
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Singup from "./components/Signup.jsx";
import Details from "./components/Details.jsx";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Singup} />
            <Route path="/details" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;