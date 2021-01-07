import React from "react";
import styled from "styled-components";
import rock from "../../img/icon-rock.svg";

const StyledFigure = styled.div.attrs((props) => ({
  primaryColor: props.primaryColor,
  secondaryColor: props.secondaryColor,
  shadowColor: props.shadowColor,
}))`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: white;
  background: linear-gradient(
    to top left,
    ${(props) => props.primaryColor} 0%,
    ${(props) => props.secondaryColor} 100%
  );
  box-shadow: 0 8px ${(props) => props.shadowColor};
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    /* transform: scale(0.95);
    box-shadow: 0 6px hsl(349, 71%, 32%); */
    cursor: pointer;
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const StyledImgBox = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 8rem;
  height: 8rem;
  box-shadow: inset 0px 8px 2px rgba(59, 67, 99, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Figure({
  shadowColor,
  primaryColor,
  secondaryColor,
  figureImg,
  onClick,
  name,
}) {
  return (
    <StyledFigure
      name={name}
      onClick={onClick}
      shadowColor={shadowColor}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <StyledImgBox>
        <img src={figureImg} />
      </StyledImgBox>
    </StyledFigure>
  );
}

export default Figure;
