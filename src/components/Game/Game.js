import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import "../GuessInput";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);

  return (
    <>
      <GuessResults userGuesses={userGuesses} />
      <GuessInput
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
    </>
  );
}

export default Game;
