import React from "react";
import styled from "styled-components";
import Figure from "./figure";
import rock from "../../img/icon-rock.svg";

function GameBoard({}) {
  return (
    <Figure
      shadowColor={"var(--rockShadowColor)"}
      primaryColor={"var(--rockPrimaryColor)"}
      secondaryColor={"var(--rockSecondaryColor)"}
      figureImg={rock}
    ></Figure>
  );
}

export default GameBoard;
