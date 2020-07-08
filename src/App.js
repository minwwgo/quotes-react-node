import React, { useState, useEffect } from "react";
import logo from './quotation-mark-svgrepo-com.svg'

function App() {
  const [quotes, setQuotes] = useState([]);

  const updateQuote=()=>
    fetch("https://cyf-node-minwwgo-quote-server.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuotes(data));

  useEffect(updateQuote, []);

  return (
    <div className="App">
      <h1> Hello from Quotes React Node </h1>
      <div className="bg-warning m-5 p-5"> 
      <img src={logo} />
      <p> {quotes.quote}</p> 
      <p className="text-right">{quotes.author}</p></div>

      <button onClick={()=> window.location.reload()}> refresh page</button>
      <button onClick={updateQuote}>new quote</button>
    </div>
  );
}

export default App;
