import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#004080', color: 'white', py: 4, px: 3 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Section gauche avec l'armoirie */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://via.placeholder.com/200" // Remplacez par l'image réelle de l'armoirie
              alt="Armoirie"
              style={{ width: '150px', height: '150px', marginBottom: '16px' }}
            />
            <Typography variant="h6" align="center">
              Primature du Niger
            </Typography>
          </Box>
        </Grid>

        {/* Section centrale avec les informations */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contactez-nous
          </Typography>
          <Typography variant="body1">Adresse : Boulevard de la République, Niamey, Niger</Typography>
          <Typography variant="body1">Téléphone : +227 20 72 24 25</Typography>
          <Typography variant="body1">Email : contact@primature.ne</Typography>
        </Grid>

        {/* Section droite avec les liens */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Liens rapides
          </Typography>
          <Typography variant="body1">
            <a href="/institutions" style={{ color: 'white', textDecoration: 'none' }}>
              Institutions
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="/actualites" style={{ color: 'white', textDecoration: 'none' }}>
              Actualités
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>
              Services aux usagers
            </a>
          </Typography>
        </Grid>
      </Grid>

      {/* Section des réseaux sociaux */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Suivez-nous sur les réseaux sociaux
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: '#004080',
              '&:hover': { backgroundColor: '#ffffffb3', transform: 'scale(1.1)' },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: '#004080',
              '&:hover': { backgroundColor: '#ffffffb3', transform: 'scale(1.1)' },
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: '#004080',
              '&:hover': { backgroundColor: '#ffffffb3', transform: 'scale(1.1)' },
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'white',
              color: '#004080',
              '&:hover': { backgroundColor: '#ffffffb3', transform: 'scale(1.1)' },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid white', pt: 2 }}>
        <Typography variant="body2">© {new Date().getFullYear()} Primature du Niger. Tous droits réservés.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
