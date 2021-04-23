import styled from "styled-components";
import { ellipsisCss, fontFamilyCss } from "./typograhy.style";

const Text = styled.p`
  ${() => fontFamilyCss}
  font-weight: 300;

  ${({ ellipsis }) => (ellipsis ? ellipsisCss : "")}
`;

export default Text;
