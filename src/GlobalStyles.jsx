import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Secular One', sans-serif;
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

.menu--appear {
  transform: scale(0);
}
.menu--appear-active {
  transform: scale(1);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.menu--appear-done {
}

.menu--enter {
  transform: rotateY(90deg);
}
.menu--enter-active {
  transform: rotateY(0);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.menu--enter-done {
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

.gameBoard--exit {
}
.gameBoard--exit-active {
  transform: rotateY(90deg);
  transition: transform 0.7s 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.gameBoard--exit-done {
}

.winnerCard--enter {
  transform: rotateY(90deg);
}
.winnerCard--enter-active {
  transform: rotateY(0);
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.winnerCard--enter-done {
}

.winnerCard--exit {
}
.winnerCard--exit-active {
  transform: rotateY(90deg);
  transition: transform 0.7s 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.winnerCard--exit-done {
}

.shape-x--enter .line-1{ 
  stroke-dashoffset: 45; 
}
.shape-x--enter-active .line-1{ 
  stroke-dashoffset: 0; 
  transition: stroke-dashoffset 0.3s cubic-bezier(0.22, 1, 0.36, 1); 
}
.shape-x--enter-done .line-1{
}

.shape-x--enter .line-2{ 
  stroke-dashoffset: 45; 
}
.shape-x--enter-active .line-2{ 
  stroke-dashoffset: 0; 
  transition: stroke-dashoffset 0.35s 0.35s cubic-bezier(0.22, 1, 0.36, 1); 
}
.shape-x--enter-done .line-2{
}

.shape-o--enter { 
  stroke-dashoffset: 126; 
}
.shape-o--enter-active { 
  stroke-dashoffset: 0; 
  transition: stroke-dashoffset 0.7s cubic-bezier(0.85, 0, 0.15, 1); 
}
.shape-o--enter-done { 
  stroke-dashoffset: 0; 
}
`;

export default GlobalStyles;
