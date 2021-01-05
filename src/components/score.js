import React from "react";
import styled from "styled-components";

const StyledScoreBox = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  div {
    align-items: center !important;
    p:nth-of-type(1) {
      text-transform: uppercase;
      color: var(--scoreTextColor);
    }
    p:nth-of-type(2) {
      color: var(--darkTextColor);
    }
  }
`;

function Score({}) {
  return (
    <StyledScoreBox>
      <div>
        <p>Score</p>
        <p>13</p>
      </div>
    </StyledScoreBox>
  );
}

export default Score;
