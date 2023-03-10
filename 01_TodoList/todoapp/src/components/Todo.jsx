// What does this component do? - It displays the data from the TodoList component!
// This is the "Bauteilbehälter" - This Todo component receives the data from the TodoList:
import React from 'react';
import { useState } from 'react';

/* the prop "done" is a boolean value (life if / else), so we can use a ternary operator to display "Done" or "Still to do */
const Todo = ({ description, done}) => {

  const [isdone, setDone] = useState(done);

  const changeTodo = () => {
    if(isdone) {
      setDone(false);
    } else {
      setDone(true);
    }
  };

  return (
    <div>
      <div className={
      isdone 
      ? 'flex justify-between items-center p-2 bg-green-600 text-white' 
      : 'flex justify-between items-center p-2 bg-red-600 text-white'
    }
    >
    <h1 className='text-lg cursor-pointer' onClick={changeTodo}>{description}</h1>
    <button className='text-lg bg-gray-400 p-2 text-white'>Delete</button></div>
   </div>
  );
};

export default Todo;
