import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 32%;
  height: 32%;
  background: #304cff;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5);
  }
`;

const Tile = ({ player }) => <Square>{player}</Square>;

export default Tile;
