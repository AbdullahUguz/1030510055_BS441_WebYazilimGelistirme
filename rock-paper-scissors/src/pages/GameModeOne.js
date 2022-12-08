import React, { useEffect, useState } from "react";
import "../App.css";

function GameModOne() {
  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState();
  const [computerChoice, setComputerChoice] = useState();
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const str = userChoice + computerChoice;
    console.log(str);
    if (
      str === "rockscissors" ||
      str === "scissorspaper" ||
      str === "paperrock"
    ) {
      setUserScore((prev) => prev + 1);
      setResult("User +1 puan aldı");
    } else if (
      str === "scissorsrock" ||
      str === "paperscissors" ||
      str === "rockpaper"
    ) {
      setComputerScore((prev) => prev + 1);
      setResult("Computer +1 puan aldı");
    } else if (
      str === "rockrock" ||
      str === "scissorsscissors" ||
      str === "paperpaper"
    ) {
      setResult("Beraber");
    }
  }, [play]);

  useEffect(() => {
    if (userScore === 5 || computerScore === 5) {
      setGameOver(true);
      userScore === 5
        ? setResult("Kazana USER !!!!!")
        : setResult("Kazanan COMPUTER !!!!!!");
    }
  }, [userScore, computerScore]);

  const handleClick = (e) => {
    setUserChoice(e.target.value);
  };

  const handlePlay = (e) => {
    if (!userChoice) {
      alert("Önce user şeçimini yapmalıdır !!!");
    } else {
      assignmentComputerChoice();
      setPlay(!play);
    }
  };

  const assignmentComputerChoice = () => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(random);
  };

  const reset = () => {
    setUserScore(0);
    setComputerScore(0);
    setGameOver(false);
    setResult("");
  };

  return (
    <div className="row text-center">
      <div className="col-sm-6">
        <div>
          <h3>User Score = {userScore}</h3>
          <div className="mt-5">
            {userChoice ? (
              <img
                className="userImg"
                src={require(`../../public/img/${userChoice}.png`)}
              />
            ) : (
              <p>Butonlar ile yapacağınız işareti şeçiniz</p>
            )}
          </div>
        </div>
        <div className="mt-5 mb-5">
          <button
            type="button"
            className={
              userChoice == "rock"
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
              userChoice == "paper"
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
              userChoice == "scissors"
                ? "btn btn-outline-info active"
                : "btn btn-outline-info"
            }
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
          {computerChoice ? (
            <img
              className="computerImg"
              src={require(`../../public/img/${computerChoice}.png`)}
            />
          ) : (
            <p>
              Oyna butonuna bastıktan sonra bilgisayar şeçimini
              gerçekleştirecektir
            </p>
          )}
        </div>
      </div>

      <div className="col-sm-12">
        <p>
          {userScore === 5 || computerScore === 5 ? (
            <h2>{result}</h2>
          ) : (
            <strong>{result}</strong>
          )}
        </p>
      </div>

      <div className="col-sm-12 mt-2">
        {!gameOver ? (
          <button
            type="button"
            className="btn btn-success px-5"
            onClick={handlePlay}
          >
            Oyna
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning px-5"
            onClick={() => reset()}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default GameModOne;
