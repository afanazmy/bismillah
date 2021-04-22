import styled from "styled-components";
import { hoverCss } from "./typhography/typograhy.style";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  @media (max-width: 1269px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1029px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 789px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 539px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MovieCardContainer = styled.div`
  width: 222px;

  .movie-title {
    ${() => hoverCss}

    h1 {
      margin-block: 0.3em;
    }
  }

  .movie-poster {
    img {
      width: 222px;
      height: 282px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px #0000005c;
    }
  }
`;
