import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; Styling is going to be done via Tailwind CSS in our case
import App from './App';
import reportWebVitals from './reportWebVitals';
/* Up there we import the React library, the ReactDOM library, 
 the index.css file, the App component, and the reportWebVitals function. */

 // <App /> APP COMONENT: Down there we render the App component inside the root element of the DOM.
 // This is connected with App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
