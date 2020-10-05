import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SVG from "./SVG.jsx";

const Line = styled.line`
  fill: none;
  stroke: #f05483;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 45;
`;

const PlayerX = ({ isButton }) => (
  <SVG
    isButton={isButton}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 51.6 51.6"
    xmlSpace="preserve"
  >
    <Line className="line-1" x1="10.4" y1="10" x2="41.2" y2="41.6" />
    <Line className="line-2" x1="41.6" y1="10.4" x2="10" y2="41.2" />
  </SVG>
);

PlayerX.propTypes = {
  isButton: PropTypes.bool,
};

export default PlayerX;
