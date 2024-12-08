import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BiographiePage = () => {
  const sections = [
    {
      title: 'Mission',
      content: (
        <Typography>
          Le Premier Ministre est chargé de coordonner l’action gouvernementale
          et de garantir la mise en œuvre des politiques publiques définies par
          le Chef de l’État.
        </Typography>
      ),
    },
    {
      title: 'État civil',
      content: (
        <Typography>
          Nom complet : S.E.M Ouhoumoudou Mahamadou <br />
          Date de naissance : 1954 <br />
          Lieu de naissance : Attribut ville ou région ici.
        </Typography>
      ),
    },
    {
      title: 'Galerie',
      content: (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src="https://via.placeholder.com/400"
              alt="Photo 1"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="https://via.placeholder.com/400"
              alt="Photo 2"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      ),
    },
    {
      title: 'Vidéo',
      content: (
        <video
          controls
          style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }}
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      ),
    },
  ];

  return (
    <Box sx={{ py: 5, px: { xs: 2, sm: 4, md: 8 }, backgroundColor: '#f9f9f9' }}>
      {/* Titre principal */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#004080',
          textTransform: 'uppercase',
          mb: 4,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: '120px',
            height: '4px',
            backgroundColor: '#004080',
            margin: '0 auto',
            marginTop: '8px',
          },
        }}
      >
        Biographie
      </Typography>

      {/* Photo et texte */}
      <Grid container spacing={4} alignItems="center">
        {/* Photo */}
        <Grid item xs={12} md={4}>
          <Avatar
            src="https://via.placeholder.com/400" // Remplacez par la vraie photo
            alt="Premier Ministre"
            sx={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              mx: 'auto',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            }}
          />
        </Grid>

        {/* Texte */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 'bold', color: '#004080' }}
          >
            S.E.M Ouhoumoudou Mahamadou
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#555',
              mb: 2,
            }}
          >
            PREMIER MINISTRE, CHEF DU GOUVERNEMENT.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            La Primature est dirigée par un Premier Ministre, Chef du
            Gouvernement. Ce dernier anime et coordonne l'action gouvernementale.
            Il assure l'exécution des lois et peut déléguer certains de ses
            pouvoirs aux ministres.
          </Typography>
        </Grid>
      </Grid>

      {/* Ligne de séparation */}
      <Divider sx={{ my: 4, borderColor: '#ddd' }} />

      {/* Fenêtres rétractables */}
      <Box>
        {sections.map((section, index) => (
          <Accordion key={index} sx={{ mb: 2, boxShadow: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                backgroundColor: '#004080',
                color: 'white',
                borderRadius: '8px',
                '&:hover': { backgroundColor: '#003060' },
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '8px',
                p: 2,
              }}
            >
              {section.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default BiographiePage;
