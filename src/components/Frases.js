import { useState } from "react";
import { render } from "react-dom";
import { FraseData } from "../helpers/FrasesData";

  const Frases = () =>{
      
 const QuoteBox = ({ quote, handleNewquote }) => (
    <div id="quote-box">
      <p id="text">{quote.text}</p>
      <h2 id="author">{quote.author}</h2>
      <div class="actions">
        <button id="new-quote" class="button" onClick={handleNewquote}>
          Nueva Frase
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          Tweet
        </a>
      </div>
    </div>
  );
  
  const getRamdonFrase = () =>
    Math.round(Math.random() * (FraseData.length - 1 - 0) + 0);
  
  const App = () => {
    const [quote, setQuote] = useState(FraseData[getRamdonFrase()]);
  
    const handleNewquote = () => {
      setQuote(FraseData[getRamdonFrase()]);
    };
    return (
      <div class="main">
        <QuoteBox quote={quote} handleNewquote={handleNewquote} />
      </div>
    );
  };
  
  render(<App />, document.querySelector("#root"));
}  
  export default Frases;
 