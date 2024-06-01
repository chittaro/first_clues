import { useState } from "react";

interface Props {
    question: string,
    answer: string,
    number: string
}

function TriviaCard( {question, answer, number}: Props ) {

    const [guess, setGuess] = useState("");

    return (
        <div className = "trivia-card">
            <div className = "trivia-grid">
                <p>{question}</p>
                <form>
                <label>Guess:
                    <input type="text" onChange={(e) => setGuess(e.target.value)}
                    />
                </label>
                </form>
                <p> {guess === answer && number}</p>
            </div>
        </div>
        
    )

}

export default TriviaCard;