// What does this component do?
// This is the "Füllmaterial" - This Data from our TodoList component is passed to the Todo component as a prop:
// Stopped at 45:00

import React from 'react'
import Todo from './Todo'
import { useState} from 'react'

// todos is an array of objects:
const todos = [
  { "description": "Buy Stuff", "done": true },
  { "description": "Sport", "done": false },
  { "description": "Programming", "done": false }
]

// TodoList is a component that renders a list of Todo components:
const TodoList = () => {

  const [opencount, CountOpenTodos] = useState(0);

  const countOpen = () => {
    const donetodos = todos.filter((item) => {
      return !item.done;
    })
    CountOpenTodos(doneTodos.length)
  }

  


  return (
    <div className='shadow-sm hover:shadow-lg transition-all'>
      <div className='text-center bg-gray-900 text-white py-4 font-semibold'>
        <h1 className='text-3xl'>Our Todos</h1>
        <h2 className='my-2'>Open Todos: {opencount}</h2>
      </div>
      {todos.map((item, index) => {
        return (
          <Todo
            description={item.description}
            done={item.done}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TodoList

