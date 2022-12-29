import React, { useState } from "react";
import { useEffect } from "react";

function ChoiceButtonModeTwo({ userChoice, setUserChoice}) {
  const [buttonControl, setButtonControl] = useState(false);
  const [isChosen, setIsChosen] = useState(false);

  const handleClick = (e) => {
    setUserChoice(e.target.value);
  };

  // useEffect(()=>{
  //   if(!userChoice){
  //     setIsChosen(false);
  //   }
  // },[userChoice]);

  // const handleChosen = ()=>{
  //   setIsChosen(true);
  // }

  // if (isChosen) {

  if (userChoice) {
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
          Taş
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
          Kağıt
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
          Makas
        </button>
        <div className="mt-2">
          {/* {userChoice ? (<button onClick={handleChosen} className="btn btn-outline-danger">
            Seçimini kapat
          </button>):(<><p className="mt-3">Şeçim yapmanız gerekiyor</p></>)} */}

          {userChoice ?(<><p className="mt-3">Şeçim yapmanız gerekiyor</p></>) :(<></>)}
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
