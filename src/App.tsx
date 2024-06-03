import { useState } from "react";
import TriviaCard from "./components/TriviaCard"
import NextStep from "./components/NextStep"

function App() {

  const triviaList = [
    {question: "On what day did we first meet?", answer: "09/17", number: "169"},
    {question: "What (or who) was our first subject of conversation?", answer: "rhys", number: "69"},
    {question: "When was our first ugli hw session?", answer: "10/08", number: "22"},
    {question: "What was the first movie we watched together?", answer: "the devil wears prada", number: "42"},
    {question: "How many points off did we get on our tied chem score?", answer: "1", number: "109"},
    {question: "Who was the first (non mich) hometown friend of mine you met?", answer: "anika", number: "42"},
    {question: "What was the name of our first chicago brunch stop?", answer: "breakfast house", number: "22"},
    {question: "What was the first meal we cooked at the chittaro house?", answer: "pancakes", number: "223"},
    {question: "How many weeks was our longest streak apart?", answer: "3", number: "290"},
    {question: "What was the first thing you lent to me?", answer: "calculator", number: "42"},
    {question: "How late did we stay up talking during the boyne retreat (_:00 am)", answer: "4", number: "115"},
    {question: "What song did I say reminded me of you during the early stages?", answer: "in your eyes", number: "5"}
  ]

  const clueString = "169 69 22 42 109 42 22 223 290 42 115 5"; 

  const [key, setKey] = useState("");

  return (
    <>
      <h1>Hello girlf.</h1>
      <h2>Enter guesses below to discover the clues for your first secret schmecret key.</h2>
      <h3>(make all guesses in lowercase. for date questions, format guesses as MM/DD)</h3>
      {triviaList.map((trivia, index) => <TriviaCard key = {index} question = {trivia.question} 
                                          answer = {trivia.answer} number = {trivia.number} />)}
      <h3>Verify clue output below:</h3>
      <form>
        <label>(type in order of appearance with format = 102 36 120 69...)  
        <input type = "text" onChange={(e) => setKey(e.target.value)}/>
        </label>
      </form>

      {key === clueString && <NextStep/>}
    </>
    
  )

}

export default App
