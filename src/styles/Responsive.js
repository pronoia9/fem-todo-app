import { css } from "styled-components";

export const responsive = css`
  @media only screen and (min-width: 600px) {
    body {
      background-size: 42rem, 42rem, 15rem;
    }
  }

  @media only screen and (min-width: 800px) {
    body {
      padding-top: 8.75rem;
    }
  }
`;