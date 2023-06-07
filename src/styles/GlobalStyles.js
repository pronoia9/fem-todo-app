// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   :root {
    --color-bright-blue: ${({ theme }) => theme.colorBrightBlue};
    --gradient-primary: ${({ theme }) => theme.gradientPrimary};
    --color-bg: ${({ theme }) => theme.colorBg};
    --color-surface: ${({ theme }) => theme.colorSurface};
    --color-border: ${({ theme }) => theme.colorBorder};
    --color-text-active: ${({ theme }) => theme.colorTextActive};
    --color-text-completed: ${({ theme }) => theme.colorTextCompleted};
    --color-text-1: ${({ theme }) => theme.colorText1};
    --box-shadow: ${({ theme }) => theme.boxShadow};
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text-1);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
