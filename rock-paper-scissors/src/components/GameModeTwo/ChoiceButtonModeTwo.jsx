import React, { useState } from "react";

function ChoiceButtonModeTwo({ userChoice, setUserChoice}) {
  const [buttonControl, setButtonControl] = useState(false);
  const [isChosen, setIsChosen] = useState(false);

  const handleClick = (e) => {
    setUserChoice(e.target.value);
  };

  if (isChosen) {
    return (
      <>
        <button className="btn btn-primary">Seçim yapildi</button>
      </>
    );
  } else {
    return buttonControl ? (
      <>
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
              ? "btn btn-outline-info mx-2 active"
              : "btn btn-outline-info mx-2"
          }
          value={"scissors"}
          onClick={handleClick}
        >
          Scissors
        </button>
        <div className="mt-2">
          <button onClick={() => setIsChosen(true)} className="btn btn-outline-danger">
            Seçimini kapat
          </button>
        </div>
      </>
    ) : (
      <>
        <button
          onClick={() => setButtonControl(true)}
          className="btn btn-outline-primary"
        >
          Seçim yap
        </button>
      </>
    );
  }
}

export default ChoiceButtonModeTwo;
