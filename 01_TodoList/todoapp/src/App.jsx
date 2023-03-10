import { useState } from "react";
// import reactLogo from "./assets/react.svg"; NOT NEEDED ANYMORE FOR THIS PROJECT
// import "./App.css"; // NOT NEEDED ANYMORE FOR THIS PROJECT (Our general Styling)
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  // Over here we start using Tailwind’s utility classes to style our content.
  return (
    <div className="App">  
      <div className="max-w-xl m-auto bg-gray-200 mt-80">
        <TodoList> </ TodoList>
      </div> 
    </div>
  );
}

export default App;
