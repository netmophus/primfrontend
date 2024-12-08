import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from '@mui/material';

const ServicesUsagersPage = () => {
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
        Services aux Usagers
      </Typography>

      {/* Introduction */}
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          lineHeight: 1.8,
          color: '#333',
          textAlign: 'justify',
          fontSize: '1.1rem',
        }}
      >
        Le pays s’inscrit durablement dans une stratégie d’innovation et de mode
        de délivrance moderne des services à l’endroit des citoyens grâce aux
        Technologies de l’Information et de la Communication. Désormais, le
        citoyen peut accéder aux services proposés par son Administration via
        internet.
        <br />
        <br />
        La présence en ligne de l’Administration se veut structurée et intuitive,
        fournissant informations, points de contact et services dématérialisés
        dans une logique cohérente, harmonieuse et inclusive à l’égard de toute
        la population. Ses bénéfices pour l’Administration et ses administrés
        sont nombreux et diversifiés : notamment, la numérisation des échanges
        réduit les coûts de gestion et de déplacement, soutient le développement
        économique, renforce la transparence et améliore la qualité des services
        rendus.
      </Typography>

      {/* Objectifs */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#004080', mb: 2 }}
        >
          Objectifs du Portail
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#004080',
                    mb: 1,
                  }}
                >
                  Procédures dématérialisées
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Le site permet d’accéder à toutes les informations nécessaires
                  à la réalisation de la procédure et offre le lien direct
                  d’accès à la démarche en ligne.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                p: 2,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#004080',
                    mb: 1,
                  }}
                >
                  Procédures en cours de dématérialisation
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  Le portail propose toutes les informations nécessaires pour
                  préparer la documentation et faciliter les demandes aux
                  guichets de l’Administration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Module de suggestion */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#004080', mb: 2 }}
        >
          Proposez vos suggestions
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: '#555' }}>
          L’Administration met à votre disposition un module de suggestion pour
          améliorer continuellement le portail et mieux répondre à vos attentes.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Votre suggestion"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Soumettre votre suggestion
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesUsagersPage;
