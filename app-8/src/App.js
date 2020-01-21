import React from 'react';
import axios from "axios"
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      image: "",
      type: [],
      weight: 0,
      height: 0
    }
  }

  componentDidMount() {
    let ranNum = Math.ceil(Math.random() * 151);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${ranNum}/`)
    .then(data => {
      const type = data.data.types.map(type => type.type.name);
      const { name, weight, height } = data.data;
      const image = data.data.sprites.front_default

      this.setState({ name, weight, height, image, type })
    })
  }

  render() {
    const { name, image, type, weight, height } = this.state;
    let typesDisplay = type.map((t, i) => <li key={i}>{t}</li>)

    return (
      <div className="App">
        <h1>Random Pokemon Picker! (First Gen)</h1>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img src={image} alt={name}/>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        <h6>Types</h6>
        <ol>
          {typesDisplay}
        </ol>
      </div>
    );
  }
}

export default App;
