import React, { useEffect, useState } from "react";
import Figure from "../components/figure";
import GameBoard from "../components/gameboard";
import Header from "../components/header";
import Layout from "../components/layout";
import ScoreBoard from "../components/scoreboard";

const IndexPage = () => {
  const [screen, setScreen] = useState("GAME");
  const [userFigure, setUserFigure] = useState("");
  const [randomFigure, setRandomFigure] = useState("");
  const [isRandomFigureUpdated, setIsRandomFigureUpdated] = useState(false);

  const [point, setPoint] = useState(0);

  function handleRock(event) {
    setUserFigure("ROCK");
    getRandomFigure();
  }

  function handlePaper(event) {
    console.log(event.target);
    setUserFigure("PAPER");
    getRandomFigure();
  }

  function handleScissors(event) {
    console.log(event.target);
    setUserFigure("SCISSORS");
    getRandomFigure();
  }

  function handlePlayAgain() {
    // setUserFigure("");
    // setRandomFigure("");
    setScreen("GAME");
  }

  function getRandomFigure() {
    let figures = ["PAPER", "SCISSORS", "ROCK"];
    let randomFigure = Math.floor(Math.random() * figures.length);
    setRandomFigure(figures[randomFigure]);
    setIsRandomFigureUpdated(true);
  }

  function givePoint() {
    console.log(userFigure, randomFigure);
    let info = "";
    if (
      (userFigure === "ROCK" && randomFigure === "PAPER") ||
      (userFigure === "ROCK" && randomFigure === "ROCK")
    ) {
      // point = 0;
      setPoint(point + 0);
      info = "You lost";
    } else if (userFigure === "ROCK" && randomFigure === "SCISSORS") {
      // point += 1;
      setPoint(point + 1);
      info = "You win";
    } else if (
      (userFigure === "PAPER" && randomFigure === "SCISSORS") ||
      (userFigure === "PAPER" && randomFigure === "PAPER")
    ) {
      setPoint(point + 0);
      // point = 0;
      info = "You lost";
    } else if (userFigure === "PAPER" && randomFigure === "ROCK") {
      // point += 1;
      setPoint(point + 1);
      info = "You win";
    } else if (
      (userFigure === "SCISSORS" && randomFigure === "ROCK") ||
      (userFigure === "SCISSORS" && randomFigure === "SCISSORS")
    ) {
      // point = 0;
      setPoint(point + 0);
      info = "You lost";
    } else if (userFigure === "SCISSORS" && randomFigure === "PAPER") {
      // point = 1;
      setPoint(point + 1);
      info = "You win";
    }
    setScreen("RESULT");
    // setFigureRandom(false);
  }

  useEffect(() => {
    if (isRandomFigureUpdated === true) {
      givePoint();
      setIsRandomFigureUpdated(false);
    }
  }, [isRandomFigureUpdated]);

  return (
    <Layout>
      <Header></Header>

      {screen === "GAME" ? (
        <GameBoard
          handleRock={handleRock}
          handlePaper={handlePaper}
          handleScissors={handleScissors}
        ></GameBoard>
      ) : (
        <ScoreBoard
          handlePlayAgain={handlePlayAgain}
          userFigure={userFigure}
          randomFigure={randomFigure}
          point={point}
        ></ScoreBoard>
      )}
    </Layout>
  );
};

export default IndexPage;
