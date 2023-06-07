// App.jsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/GlobalStyles';
import { handleColorSchemeChange, getSystemTheme } from './utils/utils';

export default function App () {
  const [theme, setTheme] = useState(getSystemTheme);

  // Listen for changes in the system's color scheme
  useEffect(() => {
    const colorSchemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeListener.addEventListener('change', (e) => handleColorSchemeChange(e, setTheme));
    return () => { colorSchemeListener.removeEventListener('change', handleColorSchemeChange); };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};
