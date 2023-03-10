// What does this component do? - It displays the data from the TodoList component!
// This is the "Bauteilbehälter" - This Todo component receives the data from the TodoList:
import React from 'react'

/* the prop "done" is a boolean value (life if / else), so we can use a ternary operator to display "Done" or "Still to do */
const Todo = ({ description, done }) => {
  return (
    <div>
      <h1>{description}</h1>
    </div>
  )
}

export default Todo
