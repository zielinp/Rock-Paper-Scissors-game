import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Figure from "./figure";
import rock from "../../img/icon-rock.svg";
import paper from "../../img/icon-paper.svg";
import scissors from "../../img/icon-scissors.svg";

const StyledScoreBoard = styled.div`
  border: 1px solid yellow;
  height: 24rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > div:nth-of-type(1),
  > div:nth-of-type(3) {
    border: 1px solid green;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    > div {
      margin-top: 5rem;
      transform: scale(1.5);
      :hover {
        animation: none;
      }
    }
  }

  > div:nth-of-type(2) {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
  }
`;

const StyledButton = styled.a`
  font-size: 1rem;
  color: var(--rockShadowColor);
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 0.5rem;
  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

function ScoreBoard({ handlePlayAgain, userFigure }) {
  const [randomFigure, setRandomFigure] = useState("");

  function getRandomFigure() {
    let figures = ["PAPER", "SCISSORS", "ROCK"];
    let randomFigure = Math.floor(Math.random() * figures.length);
    setRandomFigure(figures[randomFigure]);
  }

  useEffect(() => {
    getRandomFigure();
  }, []);

  return (
    <StyledScoreBoard>
      <div>
        <p>You picked</p>

        {userFigure == "ROCK" ? (
          <Figure
            shadowColor={"var(--rockShadowColor)"}
            primaryColor={"var(--rockPrimaryColor)"}
            secondaryColor={"var(--rockSecondaryColor)"}
            figureImg={rock}
          ></Figure>
        ) : userFigure == "PAPER" ? (
          <Figure
            shadowColor={"var(--paperShadowColor)"}
            primaryColor={"var(--paperPrimaryColor)"}
            secondaryColor={"var(--paperSecondaryColor)"}
            figureImg={paper}
          ></Figure>
        ) : userFigure == "SCISSORS" ? (
          <Figure
            shadowColor={"var(--scissorsShadowColor)"}
            primaryColor={"var(--scissorsPrimaryColor)"}
            secondaryColor={"var(--scissorsSecondaryColor)"}
            figureImg={scissors}
          ></Figure>
        ) : (
          ""
        )}
      </div>
      <div>
        <p>{userFigure}</p>
        <StyledButton onClick={handlePlayAgain}>Play again</StyledButton>
      </div>
      <div>
        <p>Your PC picked</p>
        {randomFigure == "ROCK" ? (
          <Figure
            shadowColor={"var(--rockShadowColor)"}
            primaryColor={"var(--rockPrimaryColor)"}
            secondaryColor={"var(--rockSecondaryColor)"}
            figureImg={rock}
          ></Figure>
        ) : randomFigure == "PAPER" ? (
          <Figure
            shadowColor={"var(--paperShadowColor)"}
            primaryColor={"var(--paperPrimaryColor)"}
            secondaryColor={"var(--paperSecondaryColor)"}
            figureImg={paper}
          ></Figure>
        ) : randomFigure == "SCISSORS" ? (
          <Figure
            shadowColor={"var(--scissorsShadowColor)"}
            primaryColor={"var(--scissorsPrimaryColor)"}
            secondaryColor={"var(--scissorsSecondaryColor)"}
            figureImg={scissors}
          ></Figure>
        ) : (
          ""
        )}
      </div>
    </StyledScoreBoard>
  );
}

export default ScoreBoard;
