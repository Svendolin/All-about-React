// What does this component do?
// This is the "Füllmaterial" - This Data from our TodoList component is passed to the Todo component as a prop:

import React from 'react'
import Todo from './Todo'

// todos is an array of objects:
const todos = [
  { "description": "Buy Stuff", "done": true },
  { "description": "Sport", "done": false },
  { "description": "Programming", "done": false }
]

// TodoList is a component that renders a list of Todo components:
const TodoList = () => {
  return (
    <div>
      <h1>Our Todos</h1>
      {todos.map((item, index) => {
        return <Todo
          description={item.description}
          done={item.done}
          key={index}
        />
      })}
    </div>
  );
};

export default TodoList

