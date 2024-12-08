import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';

// Exemple de données fictives
const cabinetMembers = [
  {
    id: 1,
    name: 'Aliou Moussa',
    title: 'Directeur de Cabinet',
    image: 'https://via.placeholder.com/150',
    mission: "Coordonne les activités du Cabinet du Premier Ministre et supervise l'agenda gouvernemental.",
  },
  {
    id: 2,
    name: 'Fatoumata Traoré',
    title: 'Conseillère Spéciale en Affaires Économiques',
    image: 'https://via.placeholder.com/150',
    mission: "Apporte une expertise sur les réformes économiques et l'amélioration de la gouvernance.",
  },
  {
    id: 3,
    name: 'Ibrahim Yacouba',
    title: 'Conseiller en Diplomatie',
    image: 'https://via.placeholder.com/150',
    mission: "Assure les relations internationales et conseille sur les partenariats stratégiques.",
  },
  {
    id: 4,
    name: 'Amina Doumbia',
    title: 'Chargée de la Communication',
    image: 'https://via.placeholder.com/150',
    mission: "Gère la communication institutionnelle et les relations avec la presse.",
  },
  // Ajoutez d'autres membres ici
];

const CabinetPage = () => {
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
        Membres du Cabinet et Conseillers Spéciaux
      </Typography>

      {/* Section Membres du Cabinet */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: '#333', mb: 2, mt: 4 }}
      >
        Membres du Cabinet
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={4}>
        {cabinetMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card
              sx={{
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
                sx={{
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#004080' }}>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: 'italic', color: '#555', mb: 2 }}
                >
                  {member.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333' }}>
                  {member.mission}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CabinetPage;
