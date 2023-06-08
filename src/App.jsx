// App.jsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { Banner, Footer, Header, Preloader, Todos } from './components';
import { GlobalStyles } from './styles/GlobalStyles';
import { handleColorSchemeChange, getSystemTheme } from './utils/utils';

export default function App() {
  const [theme, setTheme] = useState(getSystemTheme);
  const [loading, setLoading] = useState(true);

  // Listen for changes in the system's color scheme
  useEffect(() => {
    const colorSchemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeListener.addEventListener('change', (e) => handleColorSchemeChange(e, setTheme));
    return () => {
      colorSchemeListener.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  // Disable preloader after 5s //! TEMP DISABLED UNTIL IMPLEMENTATION
  useEffect(() => { setTimeout(() => { setLoading(false); }, 0); }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {loading && <Preloader />}
      <Banner />
      <Header theme={theme} setTheme={setTheme} />
      <Todos />
      <Footer />
    </ThemeProvider>
  );
}
