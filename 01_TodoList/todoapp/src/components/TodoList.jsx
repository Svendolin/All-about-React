// Data from out TodoList component is passed to the Todo component as a prop (in Todo.jsx)

import React from 'react'
import Todo from './Todo'

// todos is an array of objects:
const todos = [
  {"description": "Buy Stuff", "done": true},
  {"description": "Sport", "done": false},
  {"description": "Programming", "done": false}
]

// TodoList is a component that renders a list of Todo components:
const TodoList = () => {
  return (
    <div>
      <h1>Our Todo</h1>
      <Todo description={todos[0].description} done={todos[0].done} />
      <Todo description={todos[1].description} done={todos[1].done} />
      <Todo description={todos[2].description} done={todos[2].done} />
    </div>
  )
}

export default TodoList

