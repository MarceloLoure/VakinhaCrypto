import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Footer = () => {
  return (
    <AppBar position="static"
        color='transparent'
        sx={{
            display: 'flex',
            alignItems: 'center',
            top: 'auto',
            bottom: 0,
            position: 'fixed',
            width: '100%',
        }}
    >
      <Toolbar
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1100px',
        }}
      >
        <Typography variant="body1" color="inherit">
          2024 - Vakinha Crypto
        </Typography>
        <Typography variant="body2" color="inherit">
            Feito com ❤️ por <Link href="https://github.com/MarceloLoure" target='_blank'>Marcelo Lourenço</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;