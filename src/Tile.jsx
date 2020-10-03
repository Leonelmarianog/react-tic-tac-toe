import React from "react";
import styled from "styled-components";
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
    {shape === "x" ? <PlayerX /> : null}
    {shape === "o" ? <PlayerO /> : null}
  </Square>
);

export default Tile;
