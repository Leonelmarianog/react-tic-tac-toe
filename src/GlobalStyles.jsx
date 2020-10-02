import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  width: 100%;
  background: #182fc4;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-x-o {
  width: 100px;
  transition: filter 0.5s;
  cursor: pointer;
}

.button-x-o:hover {
  filter: brightness(1.5);
  transition: filter 0.5s;
}

.line {
  fill: none;
  stroke: #f05483;
  stroke-width: 20;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 45;
}

.circle {
  fill: none;
  stroke: #fba919;
  stroke-width: 20;
  stroke-miterlimit: 10;
  stroke-dasharray: 126;
  stroke-linecap: round;
}

.menu--appear {
  transform: scale(0);
}
.menu--appear-active {
  transform: scale(1);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.menu--appear-done {
}

.menu--exit {
}
.menu--exit-active {
  transform: rotateY(90deg);
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.menu--exit-done {
}

.gameBoard--enter {
  transform: rotateY(90deg);
}
.gameBoard--enter-active {
  transform: rotateY(0);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.gameBoard--enter-done {
}

`;

export default GlobalStyles;
