import { useState } from "react";
// import reactLogo from "./assets/react.svg"; NOT NEEDED ANYMORE FOR THIS PROJECT
// import "./App.css"; // NOT NEEDED ANYMORE FOR THIS PROJECT (Our general Styling)
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  // Over here we start using Tailwind’s utility classes to style our content.
  // BUT IT DOES NOT WORK! WHY?
  // HEEELP!!!
  return (
    <div className="App">
      <div className="max-w-xl m-auto bg-grey-200">
      <TodoList />
      </div>
    </div>
  );
}

export default App;
