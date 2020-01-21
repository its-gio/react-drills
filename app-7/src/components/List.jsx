import React from 'react'
import Todo from './Todo'

const List = (props) => {
  let itemsList = props.list.map((item, i) => <Todo key={i} item={item} />)
  return (
    <ol>
      {itemsList}
    </ol>
  )
}

export default List
