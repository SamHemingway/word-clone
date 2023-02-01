import React from "react";

function GuessResults({ userGuesses }) {
  return (
    <div className="guess-results">
      {userGuesses.map(({ text, key }) => {
        return (
          <p
            className="guess"
            key={key}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
