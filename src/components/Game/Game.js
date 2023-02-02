import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import "../GuessInput";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");

  const [userGuesses, setUserGuesses] = React.useState([]);

  return (
    <>
      <GuessResults
        userGuesses={userGuesses}
        answer={answer}
      />
      <GuessInput
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      {gameStatus !== `running` && (
        <Banner
          gameStatus={gameStatus}
          numOfGuesses={userGuesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
