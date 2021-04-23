import styled from "styled-components";
import { palette } from "styled-theme";

export const SearchContainer = styled.div`
  width: 100%;

  .anticon {
    padding: 6px 0px;
    position: absolute;
    color: ${palette("line", 0)};
    transition: color 0.3s ease 0s;

    &.focus {
      color: ${palette("primary", 0)};
      outline: none;
    }
  }

  .search-input {
    width: 100%;
    max-width: 250px;

    padding-left: 24px;
  }
`;

export const LoadingContainer = styled.div`
  position: relative;

  .loading-container {
    position: absolute;
    width: 100%;
    height: 100%;

    .loading {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;

      .anticon-loading {
        position: absolute;
        top: 40%;
        left: 48%;
        font-size: 2em;
        color: ${palette("primary", 0)};
      }
    }
  }

  .loading-overlay {
    opacity: 0.5;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  display: flex;

  ${({ visible }) => (visible ? "visibility: visible;" : "")}

  .modal-body {
    margin: auto;
    border: 10px solid white;
    background-color: white;
    z-index: 20;
  }
`;
