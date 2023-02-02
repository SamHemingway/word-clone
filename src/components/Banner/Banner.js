import React from "react";

function Banner({ gameStatus, numOfGuesses, answer }) {
  const winElement = (
    <div className={`happy banner`}>
      <p>
        <strong>Congratulations!</strong> Got it in {numOfGuesses}{" "}
        <strong> guesses</strong>.
      </p>
    </div>
  );

  const loseElement = (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  const element =
    gameStatus === "won"
      ? winElement
      : gameStatus === "lost"
      ? loseElement
      : false;

  return element;
}

export default Banner;
