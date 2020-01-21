import React from 'react'

const Todo = (props) => {
  return (
    <React.Fragment>
      <li>{props.item}</li>
    </React.Fragment>
  )
}

export default Todo
