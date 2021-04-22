import styled from "styled-components";
import { palette } from "styled-theme";
import { fontFamilyCss } from "../typhography/typograhy.style";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${palette("line", 0)};
  padding: 6px 12px;
  transition: border-bottom-color 0.3s ease 0s;

  ${() => fontFamilyCss}
  font-weight: 300;
  font-size: 14px;

  :focus {
    outline: none;
    border-bottom-color: ${palette("primary", 0)};
  }
`;

export default Input;
