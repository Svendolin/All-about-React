import React from 'react'

/* the prop "done" is a boolean value (life if / else), so we can use a ternary operator to display "Done" or "Still to do */
const Todo = ({description,done}) => {
  return (
    <div>
      <h1>{description}</h1>
      <h1>{done ? "Done": "Still to do"}</h1> 
    </div>
  )
}

export default Todo
