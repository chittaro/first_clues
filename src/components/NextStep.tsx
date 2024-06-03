import { useState } from "react";
import FinalStep from "./FinalSteps";


function NextStep(){

    const [guess, setGuess] = useState("");
    const trueGuess = "vgioloi xos";

    return (
        <>
            <h3>CORRECT!</h3>
            <a href = "https://github.com/chittaro/six_year">Proceed to Next Step</a>
            <h3>Verify the next clue's output below:</h3>
            <form>
                <label>(paste output directly from "gf_too_smart.txt")(delete any funky characters if you see them #rofl)  
                <input type = "text" onChange={(e) => setGuess(e.target.value)}/>
                </label>
            </form>
            {guess === trueGuess && <FinalStep/>}
        </>
    )

}

export default NextStep;