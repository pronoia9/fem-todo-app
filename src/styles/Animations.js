import { keyframes } from "styled-components";

export const fadeOutLeft = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  }
  50% {
    transform: translate(-20rem);
    opacity: 0;
  }
  100% {
    height: 0;
    transform: translate(-20rem);
    opacity: 0;
  }
`;