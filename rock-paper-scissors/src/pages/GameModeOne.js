import React, { useEffect, useState } from "react";
import "../App.css";

function GameModOne() {
  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("scissors");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Winner ");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (e) => {    
    setUserChoice(e.target.value);
  };

  const handlePlay = (e) => {
    assignmentComputerChoice();
  };

  const assignmentComputerChoice = () => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(random);
  };

  return (
    <div className="row text-center">
      <div className="col-sm-6">
        <div>
          <h3>User Score = {userScore}</h3>
          <div className="mt-5">
            <img
              className="userImg"
              src={require(`../../public/img/${userChoice}.png`)}
            />
          </div>
        </div>
        <div className="mt-5 mb-5">
          <button
            type="button"
            class={userChoice == "rock" ? "btn btn-outline-info mx-2 active" :"btn btn-outline-info mx-2"}
            value={"rock"}
            onClick={handleClick}
          >
            Rock
          </button>
          <button
            type="button"
            class={userChoice == "paper" ? "btn btn-outline-info mx-2 active" :"btn btn-outline-info mx-2"}
            value={"paper"}
            onClick={handleClick}
          >
            Paper
          </button>
          <button
            type="button"
            class={userChoice == "scissors" ? "btn btn-outline-info active" :"btn btn-outline-info"}
            value={"scissors"}
            onClick={handleClick}
          >
            Scissors
          </button>
        </div>
      </div>

      <div className="col-sm-6">
        <h3>Computer Score = {computerScore}</h3>
        <div className="mt-5">
          <img
            className="computerImg"
            src={require(`../../public/img/${computerChoice}.png`)}
          />
        </div>
      </div>
      
      <div className="col-sm-12 mt-4">
        <p>
          <strong>User Choice</strong>{" "}
        </p>
      </div>

      <div className="col-sm-12 mt-5">
        {!gameOver ? (
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handlePlay}
          >
            Oyna
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handlePlay}
          >
            Reset
          </button>
        )}
      </div>

    </div>
  );
}

export default GameModOne;
