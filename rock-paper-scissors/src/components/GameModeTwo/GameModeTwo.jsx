import React, { useState, useEffect } from "react";
import ChoiceButtonModeTwo from "./ChoiceButtonModeTwo";
import UserInfoModeTwo from "./UserInfoModeTwo";

function GameModTwo() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [ok, setOk] = useState(false);

  // const choices = ["rock", "paper", "scissors"];

  const [user1Choice, setUser1Choice] = useState();
  const [user2Choice, setUser2Choice] = useState();
  const [chosenAll, setChosenAll] = useState(false);

  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [play, setPlay] = useState(false);

  // useEffect(() => {
  //   const str = user1Choice + user2Choice;
  //   console.log(str);
  //   if (
  //     str === "rockscissors" ||
  //     str === "scissorspaper" ||
  //     str === "paperrock"
  //   ) {
  //     setUser1Score((prev) => prev + 1);
  //     setResult("User +1 puan aldı");
  //   } else if (
  //     str === "scissorsrock" ||
  //     str === "paperscissors" ||
  //     str === "rockpaper"
  //   ) {
  //     setUser2Score((prev) => prev + 1);
  //     setResult("Computer +1 puan aldı");
  //   } else if (
  //     str === "rockrock" ||
  //     str === "scissorsscissors" ||
  //     str === "paperpaper"
  //   ) {
  //     setResult("Beraber");
  //   }
  // }, [play]);

  useEffect(() => {
    if (user1Choice && user2Choice) {
      setChosenAll(true);
    }
  }, [user1Choice, user2Choice]);


  // const handlePlay = (e) => {
  //   if (!user1Choice) {
  //     alert("Önce user şeçimini yapmalıdır !!!");
  //   } else {
  //     assignmentComputerChoice();
  //     setPlay(!play);
  //   }
  // };


  // const reset = () => {
  //   setUser1Score(0);
  //   setUser2Score(0);
  //   setGameOver(false);
  //   setResult("");
  // };

  return !ok ? (
    <UserInfoModeTwo
      user1={user1}
      user2={user2}
      setUser1={setUser1}
      setUser2={setUser2}
      setOk={setOk}
    />
  ) : (
    <>
      <div className="row text-center">
        <div className="col-sm-6">
          <div>
            <h3>{user1} Score = </h3>
            <div className="mt-5">
              {chosenAll ? (
                <img
                  className="userImg"
                  src={require(`../../../public/img/${user1Choice}.png`)}
                />
              ) : (
                <p>Her iki Oyunucuda Seçimini Yapnınca Gözükecek</p>
              )}
            </div>
          </div>
          <div className="mt-5 mb-5">
            <ChoiceButtonModeTwo
              userChoice={user1Choice}
              setUserChoice={setUser1Choice}
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div>
            <h3>{user2} Score = </h3>
            <div className="mt-5">
              {chosenAll ? (
                <img
                  className="userImg"
                  src={require(`../../../public/img/${user2Choice}.png`)}
                />
              ) : (
                <p>Her iki Oyunucuda Seçimini Yapnınca Gözükecek</p>
              )}
            </div>
          </div>
          <div className="mt-5 mb-5">
            <ChoiceButtonModeTwo
              userChoice={user2Choice}
              setUserChoice={setUser2Choice}
            />
          </div>
        </div>

        <div className="col-sm-12">
          <p>result</p>
        </div>

        <div className="col-sm-12 mt-2">game over</div>
      </div>
    </>
  );
}

export default GameModTwo;
