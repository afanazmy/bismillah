import styled from "styled-components";
import { anchorCss, ellipsisCss, fontFamilyCss } from "./typograhy.style";

const Heading = styled.h1`
  ${() => fontFamilyCss}
  font-weight: 600;

  &.h2 {
    font-size: 1.5em;
  }

  &.h3 {
    font-size: 1.17em;
  }

  &.h4 {
    font-size: 1em;
  }

  ${({ ellipsis }) => (ellipsis ? ellipsisCss : "")}

  ${({ capitalize }) => (capitalize ? "text-transform: capitalize" : "")}

  a {
    ${() => anchorCss}
  }
`;

export default Heading;
