import React, { useState, useEffect } from "react";
import ChoiceButtonModeTwo from "./ChoiceButtonModeTwo";
import UserInfoModeTwo from "./UserInfoModeTwo";

function GameModTwo() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [namesOk, setNamesOk] = useState(false);

  const [user1Choice, setUser1Choice] = useState();
  const [user2Choice, setUser2Choice] = useState();
  const [chosenAll, setChosenAll] = useState(false);

  const [user1Score, setUser1Score] = useState(0);
  const [user2Score, setUser2Score] = useState(0);
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (user1Score >= 10) {
      setResult(`KAZANAN ${user1} !!!`);
      setGameOver(true);
    }
    if (user2Score >= 10) {
      setResult(`KAZANAN ${user2} !!!`);
      setGameOver(true);
    }
  }, [user1Score, user2Score]);

  const handlePlay = () => {
    if (user1Choice && user2Choice) {
      setChosenAll(true);
      play();
    }
  };

  const play = () => {
    const user1Str = user1Choice + user2Choice;
    const user2Str = user2Choice + user1Choice;
    
    if (user1Str === "rockscissors") {
      setUser1Score((prev) => prev + 5);
      setResult(`${user1} +5 puan aldı`);
    } else if (user2Str === "rockscissors") {
      setUser2Score((prev) => prev + 5);
      setResult(`${user2} +5 puan aldı`);
    } else if (user1Str === "scissorspaper") {
      setUser1Score((prev) => prev + 3);
      setResult(`${user1} +3 puan aldı`);
    } else if (user2Str === "scissorspaper") {
      setUser2Score((prev) => prev + 3);
      setResult(`${user2} +3 puan aldı`);
    } else if (user1Str === "paperrock") {
      setUser1Score((prev) => prev + 2);
      setResult(`${user1} +2 puan aldı`);
    } else if (user2Str === "paperrock") {
      setUser2Score((prev) => prev + 2);
      setResult(`${user2} +2 puan aldı`);
    } else {
      setResult(`Berabere !!!`);
    }
  };

  const handleNewGame = () => {
    setUser1Choice();
    setUser2Choice();
    setChosenAll(false);
  };

  const reset = () => {
    handleNewGame();
    setUser1Score(0);
    setUser2Score(0);
    setGameOver(false);
    setResult("");
  };

  return !namesOk ? (
    <UserInfoModeTwo
      user1={user1}
      user2={user2}
      setUser1={setUser1}
      setUser2={setUser2}
      setNamesOk={setNamesOk}
    />
  ) : (
    <>
      <div className="row text-center">
        <div className="col-sm-6">
          <div>
            <h3>
              {user1} Score = {user1Score}
            </h3>
            <div className="mt-5">
              {chosenAll ? (
                <img
                  className="userImg"
                  src={require(`../../../public/img/${user1Choice}.png`)}
                />
              ) : (
                <p>Her iki Oyunucuda Seçimini Yapıp Şeçimleri Göster Butonuna Basılınca Gözükecek</p>
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
            <h3>
              {user2} Score = {user2Score}
            </h3>
            <div className="mt-5">
              {chosenAll ? (
                <img
                  className="userImg"
                  src={require(`../../../public/img/${user2Choice}.png`)}
                />
              ) : (
                <p>Her iki Oyunucuda Seçimini Yapıp Şeçimleri Göster Butonuna Basılınca Gözükecek</p>
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

        {chosenAll ? (
          <div className="col-sm-12 mt-2">
            <h5>{result}</h5>
          </div>
        ) : (
          <></>
        )}

        <div className="col-sm-12 mt-4">
          {!chosenAll ? (
            <button
              type="button"
              className="btn btn-success px-5"
              onClick={handlePlay}
            >
              Seçimleri Göster
            </button>
          ) : gameOver ? (
            <button
              type="button"
              className="btn btn-warning px-5"
              onClick={() => reset()}
            >
              Reset
            </button>
          ):(
            <button
              type="button"
              className="btn btn-info px-5"
              onClick={handleNewGame}
            >
              Yeni Oyun
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default GameModTwo;
