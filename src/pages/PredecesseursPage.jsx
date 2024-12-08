import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Liste fictive des prédécesseurs avec des décrets détaillés
const predecesseurs = [
  {
    id: 1,
    nom: 'Mahamadou',
    prenom: 'Ouhoumoudou',
    image: 'https://via.placeholder.com/150', // Remplacez par la vraie photo
    decret: `Décret n°94-152/PRN du 28 septembre 1994 portant nomination du premier ministre
             17/10/94 au 06/02/95: Décret n°94-153/PRN du 17 octobre 1994 portant nomination du premier ministre`,
    mandature: '03 Avril 2021 - 26 Juillet 2023',
  },
  {
    id: 2,
    nom: 'Brigi',
    prenom: 'Rafini',
    image: 'https://via.placeholder.com/150',
    decret: `Décret n°2011-045/PRN du 07 avril 2011 portant nomination du premier ministre`,
    mandature: '07 Avril 2011 - 03 Avril 2021',
  },
  // Ajoutez les autres prédécesseurs ici
];

// Triez les prédécesseurs du plus récent au plus ancien
const sortedPredecesseurs = predecesseurs.sort((a, b) => b.id - a.id);

const PredecesseursPage = () => {
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
        Prédécesseurs du Premier Ministre
      </Typography>

      {/* Liste des prédécesseurs */}
      <Grid container spacing={4}>
        {sortedPredecesseurs.map((predecesseur) => (
          <Grid item xs={12} md={6} key={predecesseur.id}>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                p: 3,
                borderRadius: '12px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: '150px',
                  height: '150px',
                  flexShrink: 0,
                  mb: { xs: 2, sm: 0 },
                  mr: { sm: 3 },
                }}
              >
                <img
                  src={predecesseur.image}
                  alt={`${predecesseur.nom} ${predecesseur.prenom}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Informations */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  {predecesseur.prenom} {predecesseur.nom}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    fontWeight: 'bold',
                    backgroundColor: '#004080',
                    color: 'white',
                    borderRadius: '8px',
                    p: 2,
                  }}
                >
                  Mandature : {predecesseur.mandature}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {predecesseur.decret}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PredecesseursPage;
