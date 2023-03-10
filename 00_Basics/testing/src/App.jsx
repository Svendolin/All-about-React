import { useState } from 'react'
// import './App.css'  Not needed with Tailwind CSS because we are using utility classes

function App() {
  const [count, setCount] = useState(0);

// Added stuff from here: https://tailwindcss.com/docs/utility-first (Tailwind CSS)
/* -------------------- MAJOR APP COMPONENT -------------------- */
  return (
    <div className="App bg-gray-300 m-2">
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
      <h2 className='text-2xl font-bold bg-blue-400'>I'm working with Tailwind CSS Utility Classes</h2>
      <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-blue-450">You have a new message!</p>
        </div>
      </div>
      <TailwindCSSButton>
        Click me!
      </TailwindCSSButton>
    </div>
  );
}

// (Every component shoud have its own function or sperated into different files)
// Thats why I created a new component for the button and imported it into the App component above as <TailwindCSSButton />
// Even better if you create a new file for the button component and import it into the App component.
// This is going to be done in 01
/* -------------------- TAILWINDCSSBUTTON COMPONENT -------------------- */
function TailwindCSSButton(props) {
  return (
    <a href={props.href} className='bg-blue-500 text-white font-medium px-4 py-2 m-2 rounded hover:bg-blue-600 inline-block'>{props.children}</a>
  )
}

export default App
