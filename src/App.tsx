import { useState } from "react";
import TriviaCard from "./components/TriviaCard"

function App() {

  const triviaList = [
    {question: "On what day did we first meet?", answer: "09/17", number: "118"},
    {question: "What (or who) was our first subject of conversation?", answer: "rhys", number: "103"},
    {question: "When was our first ugli hw session?", answer: "10/08", number: "105"},
    {question: "What was the first movie we watched together?", answer: "the devil wears prada", number: "111"},
    {question: "How many points off did we get on our tied chem score?", answer: "1", number: "108"},
    {question: "Who was the first (non mich) hometown friend of mine you met?", answer: "anika", number: "111"},
    {question: "What was the name of our first chicago brunch?", answer: "breakfast house", number: "105"},
    {question: "What was the first meal we cooked at the chittaro house?", answer: "pancakes", number: "32"},
    {question: "How many weeks was our longest streak apart?", answer: "3", number: "120"},
    {question: "What was the first thing you lent to me?", answer: "calculator", number: "111"},
    {question: "How late did we stay up talking during the boyne retreat (_:00 am)", answer: "4", number: "115"},
  ]

  const clueString = "118, 103, 105, 111, 108, 111, 105, 32, 120, 111, 115"; 

  const [key, setKey] = useState("");

  return (
    <>
      <h1>Hello girlf.</h1>
      <h2>Enter guesses below to discover the clues for your first secret schmecret key.</h2>
      <h3>(make all guesses in lowercase. for date questions, format guesses as MM/DD)</h3>
      {triviaList.map((trivia, index) => <TriviaCard key = {index} question = {trivia.question} 
                                          answer = {trivia.answer} number = {trivia.number} />)}
      <form>
        <label>Verify clue output (in order) (format = 102, 36, 120 ...) 
        <input type = "text" onChange={(e) => setKey(e.target.value)}/>
        </label>
      </form>

      {key === clueString && <a href = "https://github.com/chittaro/six_year">Next hint</a>}
    </>
    
  )

}

export default App
