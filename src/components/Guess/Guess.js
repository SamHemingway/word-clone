import React from "react";
import { range } from "../../utils";

export default function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            className="cell"
            key={num}
          >
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
  //
}
