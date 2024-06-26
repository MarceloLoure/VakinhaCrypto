
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../app/components/HeaderComponent';
import theme from "../../styles/theme.js";
import Footer from './components/FooterComponent';

export const metadata = {
  title: "Vakinha Crypto",
  description: "Ajude quem precisa com criptomoedas",
  charSet: "utf-8",
};

const RootLayout = ({ children }) => {

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
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;