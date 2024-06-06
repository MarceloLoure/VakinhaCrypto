import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../styles/theme.js';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    ) ;
  }
}

export default MyApp;