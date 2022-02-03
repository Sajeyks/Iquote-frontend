import React,{ useState, useEffect } from 'react';
import Quote from './components/Quote';


function App(){
 const [quote, setQuote] = useState({
   author: null,
   content: null
 });

 const fetchQuote = async () => {
   return await fetch('http://127.0.0.1:8000/quotes/')
   .then(response => response.json());
 }

 const generate = async () => {
   setQuote(await fetchQuote())
 }

useEffect(async () => {
   setQuote(await fetchQuote())
}, [])



  return(
    <div className='App'>
         <Quote quote={quote}/>
         <button onClick={generate}>Generate new Quote</button>
    </div>
  )
}

export default App;