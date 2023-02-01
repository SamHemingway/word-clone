import React from "react";

function GuessInput({ userGuesses, setUserGuesses }) {
  const [guess, setGuess] = React.useState(true);

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.text.length !== 5) {
          console.error("You need to enter exactly 5 characters");
          return;
        }

        guess.key = crypto.randomUUID();
        const nextUserGuesses = [...userGuesses, guess];
        setUserGuesses(nextUserGuesses);
        console.log(guess);
        setGuess({ text: undefined, key: undefined });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess.text}
        maxLength="5"
        minLength="5"
        onChange={(event) => {
          const nextGuess = {
            text: event.target.value.toUpperCase(),
          };
          setGuess(nextGuess);
          console.log(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
