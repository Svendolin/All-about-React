import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  // Over here we start using Tailwind’s utility classes to style our content.
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
      <TodoList />
    </div>
  );
}

export default App;
