import React from "react";
import styled from "styled-components";
import StyledSVG from "./SVG";

const Circle = styled.circle`
  fill: none;
  stroke: #fba919;
  stroke-width: 20;
  stroke-miterlimit: 10;
  stroke-dasharray: 126;
  stroke-linecap: round;
`;

const PlayerO = ({ isButton }) => (
  <StyledSVG
    isButton={isButton}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
  >
    <Circle cx="30" cy="30" r="20" />
  </StyledSVG>
);

export default PlayerO;
