
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HelpListComponent from './components/HelpListComponent';

const HomePage = () => {
  return (
    <Box
        component="main"
         sx={{
            flexGrow: 1,
            py: 4,
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
    }}>
      <Stack spacing={2} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <Typography variant='h2'>Bem-vindo ao Vakinha Crypto!</Typography>
        <Typography variant='body1'>Projeto destinado a ajudar quem precisa.</Typography>
        <Typography variant='body1'>Faça parte da nossa comunidade e ajude!</Typography>

      </Stack>

      <HelpListComponent />
    </Box>
  );
};

export default HomePage;