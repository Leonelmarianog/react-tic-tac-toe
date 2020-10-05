import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tile from "./Tile.jsx";

const BoardBackground = styled.div`
  height: 500px;
  width: 500px;
  background: #4760ff;
  border-radius: 20px;
  border: 5px solid #4760ff;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  pointer-events: ${(props) => (props.isDisabled ? "none" : "auto")};

  & div:nth-child(1) {
    border-top-left-radius: 20px;
  }

  & div:nth-child(3) {
    border-top-right-radius: 20px;
  }

  & div:nth-child(7) {
    border-bottom-left-radius: 20px;
  }

  & div:nth-child(9) {
    border-bottom-right-radius: 20px;
  }

  &.gameBoard--enter {
    transform: rotateY(90deg);
  }
  &.gameBoard--enter-active {
    transform: rotateY(0);
    transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  &.gameBoard--exit-active {
    transform: rotateY(90deg);
    transition: transform 0.7s 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

BoardBackground.propTypes = {
  isDisabled: PropTypes.oneOf([null, "x", "o"]),
};

const GameBoard = ({ tiles, handleSetTile, winner }) => {
  return (
    <BoardBackground isDisabled={winner}>
      {tiles.map((tile, index) => (
        <Tile
          key={`tile-${index + 1}`}
          index={index}
          shape={tile}
          handleSetTile={handleSetTile}
        />
      ))}
    </BoardBackground>
  );
};

GameBoard.propTypes = {
  tiles: PropTypes.array,
  handleSetTile: PropTypes.func,
  winner: PropTypes.oneOf([null, "x", "o"]),
};

export default GameBoard;
