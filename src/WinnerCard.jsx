import React from "react";
import styled from "styled-components";

const CardBackground = styled.div`
  height: 500px;
  width: 500px;
  background: #4760ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: ${(props) => (props.winner === "x" ? "#f05483" : "#fba919")};
  text-transform: uppercase;
  font-size: 40px;
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.winner === "x" ? "#fba919" : "#f05483"};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.winner === "x" ? "#ffd894" : "#f57fa3"};
  }

  &:active {
    background-color: ${(props) =>
      props.winner === "x" ? "#fba919" : "#f05483"};
  }
`;

const WinnerCard = ({ winner, handleRestartGame }) => (
  <CardBackground>
    <h1>
      Player <StyledSpan winner={winner}>{winner}</StyledSpan> Won!
    </h1>
    <h2>Want to play again?</h2>
    <StyledButton winner={winner} onClick={() => handleRestartGame()}>
      Let's Go!
    </StyledButton>
  </CardBackground>
);

export default WinnerCard;
