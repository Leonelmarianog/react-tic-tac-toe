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
`;

export default GlobalStyles;
