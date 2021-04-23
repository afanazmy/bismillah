import styled from "styled-components";
import { palette } from "styled-theme";

export const MovieContainer = styled.div``;

export const MovieDetailContainer = styled.div`
  .breadcrumb {
    margin: 24px 0px;
    display: block;
  }

  .content {
    display: flex;
    width: 100%;

    .movie-poster {
      margin-right: 24px;
    }

    .movie-data {
      .movie-title {
        margin-bottom: 6px;
      }

      .movie-info {
        margin-top: 36px;

        h1 {
          margin-bottom: 6px;
        }

        p {
          margin-top: 6px;
        }

        .movie-detail {
          display: flex;

          .title {
            color: ${palette("line", 0)};
            width: 150px;
          }
        }
      }
    }
  }

  @media (max-width: 767.98px) {
    .content {
      display: block;
    }
  }
`;
