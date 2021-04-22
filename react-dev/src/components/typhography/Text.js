import styled from "styled-components";
import { anchorCss, ellipsisCss, fontFamilyCss } from "./typograhy.style";

const Text = styled.span`
  ${() => fontFamilyCss}
  font-weight: 300;

  a {
    ${() => anchorCss}
  }

  ${({ ellipsis }) => (ellipsis ? ellipsisCss : "")}

  ${({ capitalize }) => (capitalize ? "text-transform: capitalize" : "")}
`;

export default Text;
