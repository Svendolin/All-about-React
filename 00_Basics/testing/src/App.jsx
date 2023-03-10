import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

 
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
      <h2 className='text-3xl font-bold bg-blue-400'>Oh my</h2>
      <div className='p-6 max-w-sm mx auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
        <div className='text-xl font-medium text-black'>Hello World</div>
        <p className='text-gray-500'>Test Test</p>
      </div>
    </div>
  );
}

export default App
