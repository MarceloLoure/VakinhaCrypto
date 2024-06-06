import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static"
    color='transparent'
    sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundOpacity: 0.7,
    }}>
      <Toolbar
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '1100px',
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          <Link href='/' style={{ textDecoration: 'none', color: '#000'}} >
            Vakinha Crypto
          </Link>
        </Typography>

        <Stack direction="row" spacing={2}>

            <Button
                sx={{
                    color: '#FFF',
                    backgroundColor: '#000',
                    ":hover": {
                        backgroundColor: '#333',
                    }
                }}
                startIcon={<img src="/metamask.svg.png" alt="Ethereum" width="20" height="20" />}
            >
                Entrar
            </Button>

            <Button
            color="inherit"
            sx={{
                backgroundColor: '#FF8C00',
                ":hover": {
                    backgroundColor: '#FFA500',
                }
            }}
            href='/create'
            >
                Pedir ajuda
            </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;