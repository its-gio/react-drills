import React from 'react'

class NewTask extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addToList()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.props.userInput} onChange={(e) => this.props.handleUserInput(e)} type="text"/>
        <button>Add</button>
      </form>
    )
  }
}

export default NewTask
