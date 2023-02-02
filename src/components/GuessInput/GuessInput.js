import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  userGuesses,
  setUserGuesses,
  answer,
  gameStatus,
  setGameStatus,
}) {
  const [guess, setGuess] = React.useState("");

  const gameOver = gameStatus !== `running`;

  function checkGameStatus(
    guess,
    answer,
    numGuessesMade,
    numGuessesAllowed = NUM_OF_GUESSES_ALLOWED
  ) {
    if (guess === answer) return "won";
    if (guess !== answer && numGuessesMade === numGuessesAllowed) return "lost";
    return "running";
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        if (guess.length !== 5) {
          console.error("You need to enter exactly 5 characters");
          return;
        }

        const nextUserGuesses = [...userGuesses, guess];
        const nextGameStatus = checkGameStatus(
          guess,
          answer,
          nextUserGuesses.length
        );
        setGameStatus(nextGameStatus);
        setUserGuesses(nextUserGuesses);

        setGuess(nextGameStatus === `running` ? "" : answer);
      }}
    >
      <label htmlFor="guess-input">
        {gameOver ? `ANSWER:` : `Enter guess:`}
      </label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        maxLength="5"
        minLength="5"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        disabled={gameOver}
      />
    </form>
  );
}

export default GuessInput;
