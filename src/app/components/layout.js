import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../../../styles/theme.js';
import Header from '../components/Header';

export const metadata = {
  title: "Vakinha Crypto",
  description: "Ajude quem precisa com criptomoedas",
  charSet: "utf-8",
};

const RootLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta charSet={metadata.charSet} />
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
