import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Bounce from "../styling/Bounce.jsx";

const CardBackground = styled.div`
  height: 500px;
  width: 500px;
  background: #4760ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &.winnerCard--enter {
    transform: rotateY(90deg);
  }
  &.winnerCard--enter-active {
    transform: rotateY(0);
    transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &.winnerCard--exit-active {
    transform: rotateY(90deg);
    transition: transform 0.7s 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

const StyledSpan = styled.span`
  color: ${(props) => (props.winner === "x" ? "#f05483" : "#fba919")};
  text-transform: uppercase;
  font-size: 40px;
`;

StyledSpan.propTypes = {
  winner: PropTypes.oneOf([null, "x", "o"]),
};

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.winner === "x" ? "#fba919" : "#f05483"};
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};
  transition: background-color 0.5s, transform 0.5s;
  ${(props) => (props.isAnimated ? Bounce : "")};

  &:hover {
    background-color: ${(props) =>
      props.winner === "x" ? "#ffd894" : "#f57fa3"};
    transform: scale(1.2);
  }
`;

StyledSpan.propTypes = {
  winner: PropTypes.oneOf([null, "x", "o"]),
  isDisabled: PropTypes.bool,
  isAnimated: PropTypes.bool,
};

const WinnerCard = ({ winner, isADraw, handleRestartGame, winnerCard }) => {
  const message = isADraw ? (
    <h1>Draw!</h1>
  ) : (
    <h1>
      Player <StyledSpan winner={winner}>{winner}</StyledSpan> Won!
    </h1>
  );
  return (
    <CardBackground>
      {message}
      <h2>Want to play again?</h2>
      <StyledButton
        winner={winner}
        onClick={() => handleRestartGame()}
        isDisabled={!winnerCard}
        isAnimated={!winnerCard}
      >
        Let's Go!
      </StyledButton>
    </CardBackground>
  );
};

WinnerCard.propTypes = {
  winner: PropTypes.oneOf([null, "x", "o"]),
  isDraw: PropTypes.bool,
  handleRestartGame: PropTypes.func,
  winnerCard: PropTypes.bool,
};

export default WinnerCard;
