import React from "react";
import styled from "styled-components";
import Figure from "./figure";
import rock from "../../img/icon-rock.svg";
import paper from "../../img/icon-paper.svg";
import scissors from "../../img/icon-scissors.svg";
import triangle from "../../img/bg-triangle.svg";

const StyledGameBoard = styled.div`
  border: 1px solid black;
  margin-top: 2rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBackground = styled.div`
  /* border: 1px dotted white; */
  width: 24rem;
  background-image: url(${triangle});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  > div:nth-of-type(1) {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    margin-top: -3rem;
  }

  > div:nth-of-type(2) {
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
  }

  img {
    /* border: 1px solid black; */
  }
`;

function GameBoard({ handleRock, handlePaper, handleScissors }) {
  return (
    <StyledGameBoard>
      <StyledBackground>
        <div>
          <Figure
            onClick={handleRock}
            shadowColor={"var(--rockShadowColor)"}
            primaryColor={"var(--rockPrimaryColor)"}
            secondaryColor={"var(--rockSecondaryColor)"}
            figureImg={rock}
          ></Figure>
          <Figure
            onClick={handlePaper}
            shadowColor={"var(--paperShadowColor)"}
            primaryColor={"var(--paperPrimaryColor)"}
            secondaryColor={"var(--paperSecondaryColor)"}
            figureImg={paper}
          ></Figure>
        </div>
        <div>
          <Figure
            onClick={handleScissors}
            shadowColor={"var(--scissorsShadowColor)"}
            primaryColor={"var(--scissorsPrimaryColor)"}
            secondaryColor={"var(--scissorsSecondaryColor)"}
            figureImg={scissors}
          ></Figure>
        </div>
      </StyledBackground>
    </StyledGameBoard>
  );
}

export default GameBoard;
