import React from "react";

function GuessInput({ userGuesses, setUserGuesses }) {
  const [guess, setGuess] = React.useState("");

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
        setUserGuesses(nextUserGuesses);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
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
      />
    </form>
  );
}

export default GuessInput;
