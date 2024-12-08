import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';

// Exemple de données fictives pour les services rattachés
const servicesRattaches = [
  {
    id: 1,
    name: 'Service de la Sécurité',
    image: 'https://via.placeholder.com/150', // Remplacez par une icône ou une image
    mission: "Assure la sécurité des membres du gouvernement et des infrastructures de la Primature.",
  },
  {
    id: 2,
    name: 'Service de la Communication',
    image: 'https://via.placeholder.com/150',
    mission: "Gère la communication officielle, les conférences de presse et les relations publiques.",
  },
  {
    id: 3,
    name: 'Service des Affaires Juridiques',
    image: 'https://via.placeholder.com/150',
    mission: "Fournit des conseils juridiques et assure le suivi des textes législatifs.",
  },
  {
    id: 4,
    name: 'Service des Projets Stratégiques',
    image: 'https://via.placeholder.com/150',
    mission: "Supervise la mise en œuvre des grands projets nationaux sous la coordination de la Primature.",
  },
  // Ajoutez d'autres services ici
];

const ServicesRattachesPage = () => {
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
        Services Rattachés
      </Typography>

      {/* Liste des services */}
      <Grid container spacing={4}>
        {servicesRattaches.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
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
                image={service.image}
                alt={service.name}
                sx={{
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#004080' }}>
                  {service.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', mt: 1 }}>
                  {service.mission}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesRattachesPage;
