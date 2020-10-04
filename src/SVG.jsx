import styled from "styled-components";

const SVG = styled.svg`
  width: ${(props) => (props.isButton ? "auto" : "50%")};
`;

export default SVG;
