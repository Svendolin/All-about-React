import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Over here we start using Tailwind’s utility classes to style our content.
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
    </div>
  );
}

export default App;
