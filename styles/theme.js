'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 200,
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 100,
    },
    div: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    p: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    a: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 300,
    }
    
  },
});

export default theme;