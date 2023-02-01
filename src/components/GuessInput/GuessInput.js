import React from "react";

function GuessInput() {
  const [guessInProgress, setGuessInProgress] = React.useState("");
  const [finishedGuess, setFinishedGuess] = React.useState({
    guess: undefined,
  });

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guessInProgress.length != 5) {
          console.error("You need to enter exactly 5 characters");
          return;
        }
        const nextFinishedGuess = { guess: guessInProgress };
        setFinishedGuess(nextFinishedGuess);
        console.log(nextFinishedGuess);
        setGuessInProgress("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guessInProgress}
        maxLength="5"
        minLength="5"
        onChange={(event) => {
          setGuessInProgress(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
