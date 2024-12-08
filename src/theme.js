import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004080', // Bleu gouvernemental
    },
    secondary: {
      main: '#e63946', // Rouge pour les accents
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '18px', // Taille de la police pour tous les boutons
        },
      },
    },
  },
});

export default theme;
