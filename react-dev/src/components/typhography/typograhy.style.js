import { css } from "styled-components";
import { palette } from "styled-theme";

export const fontFamilyCss = css`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&display=swap");
  font-family: "Quicksand", sans-serif;
`;

export const ellipsisCss = css`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const anchorCss = css`
  text-decoration: none;
  color: initial;

  ${() => hoverCss}
`;

export const hoverCss = css`
  transition: color 0.3s ease 0s;

  :hover {
    color: ${palette("primary", 0)};
  }
`;
