import styled from "styled-components";

const SVG = styled.svg`
  width: ${(props) => (props.isButton ? "auto" : "50%")};

  &.shape-o--enter {
    stroke-dashoffset: 126;
  }
  &.shape-o--enter-active {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.7s cubic-bezier(0.85, 0, 0.15, 1);
  }

  &.shape-x--enter .line-1 {
    stroke-dashoffset: 45;
  }
  &.shape-x--enter-active .line-1 {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &.shape-x--enter .line-2 {
    stroke-dashoffset: 45;
  }
  &.shape-x--enter-active .line-2 {
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.35s 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

export default SVG;
