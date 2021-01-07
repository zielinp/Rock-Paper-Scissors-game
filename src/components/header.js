import React from "react";
import styled from "styled-components";
import Score from "./score";

const StyledBox = styled.div`
  /* position: absolute; */
  padding: 2rem;
  border: 2px solid white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  width: 60%;
  /* margin: auto; */
  /* top: 2rem; */
  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    p {
      text-transform: uppercase;
      font-size: 1.75rem;
      color: white;
    }
  }
`;

function Header({}) {
  return (
    <StyledBox>
      <div>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>
      <Score></Score>
    </StyledBox>
  );
}

export default Header;
