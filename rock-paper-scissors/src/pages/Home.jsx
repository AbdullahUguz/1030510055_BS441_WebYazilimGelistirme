import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-sm-12 ">
          <h5>
            Welcome to the rock paper scissors game. This game has two game
            modes.
          </h5>
        </div>
      </div>
      <hr />
      <div className="row mt-2">
        <div className="col-sm-6">
          <h4 className="mb-4">Oyun Mod 1</h4>
          <p>
            A game played against the computer. In the game, after choosing the
            player, you can press the play button to let the computer choose and
            start the game. The first to score 5 score wins the game.
          </p>
        </div>

        <div className="col-sm-6">
          <h4 className="mb-4">Oyun Mod 2</h4>
          <p>
            Two players can be played on the same computer. After the first
            player makes his choice, the buttons he has chosen become invisible,
            and when the second player makes his choice, the buttons he has
            chosen become invisible. After both players have made a choice, you
            are playing the game by showing the choices. The game takes place by
            scoring.
          </p>
          <div className="mt-3 mb-3 text-start">
            <ul>
              <h6>Scoring Chart</h6>
              <li>+5 Points if Stone Beats Scissors</li>
              <li>+3 Points if Scissors Beats Paper</li>
              <li>+2 Points if Paper Beats Stone</li>
            </ul>
          </div>
          <p>The first to reach 10 points or more wins the game.</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6">
          <Link to={"/modeOne"}>
            <button className="btn btn-outline-success">Game Mode 1</button>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to={"/modeTwo"}>
            <button className="btn btn-outline-success">Game Mode 2</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
