import React from "react";

function ChoiceButtonModeOne({ userChoice, setUserChoice }) {
  const handleClick = (e) => {
    setUserChoice(e.target.value);
  };

  return (
    <div>
      <button
        type="button"
        className={
          userChoice === "rock"
            ? "btn btn-outline-info mx-2 active"
            : "btn btn-outline-info mx-2"
        }
        value={"rock"}
        onClick={handleClick}
      >
        Rock
      </button>
      <button
        type="button"
        className={
          userChoice === "paper"
            ? "btn btn-outline-info mx-2 active"
            : "btn btn-outline-info mx-2"
        }
        value={"paper"}
        onClick={handleClick}
      >
        Paper
      </button>
      <button
        type="button"
        className={
          userChoice === "scissors"
            ? "btn btn-outline-info active"
            : "btn btn-outline-info"
        }
        value={"scissors"}
        onClick={handleClick}
      >
        Scissors
      </button>
    </div>
  );
}

export default ChoiceButtonModeOne;
