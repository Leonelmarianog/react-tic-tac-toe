import { keyframes, css } from "styled-components";

// https://styled-components.com/docs/basics#animations

const bounce = keyframes`
  0% {
    transform: scale(1.2);
  }

  50% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1);
  }
`;

const Bounce = css`
  animation: ${bounce} 0.3s linear 0s 1;
`;

export default Bounce;
