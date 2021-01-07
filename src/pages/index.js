import React, { useEffect, useState } from "react";
import Figure from "../components/figure";
import GameBoard from "../components/gameboard";
import Header from "../components/header";
import Layout from "../components/layout";
import ScoreBoard from "../components/scoreboard";

const IndexPage = () => {
  const [figure, setFigure] = useState("");

  function handleRock(event) {
    setFigure("ROCK");
  }

  function handlePaper(event) {
    console.log(event.target);
    setFigure("PAPER");
  }

  function handleScissors(event) {
    console.log(event.target);
    setFigure("SCISSORS");
  }

  function handlePlayAgain() {
    setFigure("");
  }

  return (
    <Layout>
      <Header></Header>

      {figure == "" ? (
        <GameBoard
          handleRock={handleRock}
          handlePaper={handlePaper}
          handleScissors={handleScissors}
        ></GameBoard>
      ) : (
        <ScoreBoard
          handlePlayAgain={handlePlayAgain}
          userFigure={figure}
        ></ScoreBoard>
      )}

      {/* <GameBoard
        handleRock={handleRock}
        handlePaper={handlePaper}
        handleScissors={handleScissors}
      ></GameBoard> */}
      {/* <ScoreBoard></ScoreBoard> */}
    </Layout>
  );
};

export default IndexPage;
