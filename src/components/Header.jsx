import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Primature
        </Typography>
        <Box>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">Actualités</Button>
          <Button color="inherit">À propos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
