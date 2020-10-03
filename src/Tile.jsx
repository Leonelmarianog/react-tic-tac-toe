import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import PlayerX from "./PlayerX.jsx";
import PlayerO from "./PlayerO.jsx";

const Square = styled.div`
  width: 32%;
  height: 32%;
  background: #304cff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`;

const Tile = ({ index, shape, handleSetTile }) => (
  <Square onClick={() => handleSetTile(index)}>
    <CSSTransition
      in={shape === "x"}
      timeout={700}
      classNames={"x-"}
      mountOnEnter={true}
    >
      <PlayerX />
    </CSSTransition>
    <CSSTransition
      in={shape === "o"}
      timeout={700}
      classNames={"o-"}
      mountOnEnter={true}
    >
      <PlayerO />
    </CSSTransition>
  </Square>
);

export default Tile;
