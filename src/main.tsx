import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

async function doThis() {
  const result = await fetch("https://api.quotable.io/random");
  //console.log(await result.json());
  let quote = await result.json();
  return quote.content;
}

let quote = "";

doThis().then(response => {
  console.log("Hi "+ Object.keys(response));
  console.log(response);
  quote = response;
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App randomQuote={quote} />
  </React.StrictMode>,
)
