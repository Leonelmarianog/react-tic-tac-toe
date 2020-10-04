import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import PlayerX from "./PlayerX.jsx";
import PlayerO from "./PlayerO.jsx";

const Square = styled.div`
  width: 33%;
  height: 33%;
  background-color: #304cff;
  border: 5px solid #4760ff;
  transition: background-color 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* ("none" : "") because I don't want to step over the pointer-event of the parent (GameBoard) */
  pointer-events: ${(props) => (props.isDisabled ? "none" : "")};

  &:hover {
    background-color: #586ffc;
  }
`;

const Tile = ({ index, shape, handleSetTile }) => (
  <Square onClick={() => handleSetTile(index)} isDisabled={shape}>
    <CSSTransition
      in={shape === "x"}
      timeout={700}
      classNames={"shape-x-"}
      mountOnEnter={true}
    >
      <PlayerX />
    </CSSTransition>
    <CSSTransition
      in={shape === "o"}
      timeout={700}
      classNames={"shape-o-"}
      mountOnEnter={true}
    >
      <PlayerO />
    </CSSTransition>
  </Square>
);

export default Tile;
