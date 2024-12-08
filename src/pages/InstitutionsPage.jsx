import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Modal,
  Slide,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Exemple de données pour les institutions
const institutions = [
  {
    id: 1,
    name: 'Présidence de la République',
    logo: 'https://via.placeholder.com/300',
    description: 'La Présidence de la République est le centre de l’autorité exécutive.',
    details:
      'La Présidence de la République est dirigée par le Président, garant de la Constitution et de l’unité nationale.',
  },
  {
    id: 2,
    name: 'Assemblée Nationale',
    logo: 'https://via.placeholder.com/300',
    description: 'L’Assemblée Nationale est responsable de la législation.',
    details:
      'L’Assemblée Nationale débat et adopte les lois qui régissent le pays. Elle contrôle également l’action du gouvernement.',
  },
  {
    id: 3,
    name: 'Cour Constitutionnelle',
    logo: 'https://via.placeholder.com/300',
    description: 'La Cour Constitutionnelle veille au respect de la Constitution.',
    details:
      'La Cour Constitutionnelle est l’organe garantissant la conformité des lois et des règlements avec la Constitution.',
  },
  {
    id: 4,
    name: 'Haut Conseil de la Communication',
    logo: 'https://via.placeholder.com/300',
    description: 'Organe de régulation de la communication et des médias.',
    details:
      'Le Haut Conseil de la Communication assure la liberté et la régulation de la presse et des médias au Niger.',
  },
  // Ajoutez d'autres institutions si nécessaire
];

const InstitutionsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  const handleOpenModal = (institution) => {
    setSelectedInstitution(institution);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedInstitution(null);
  };

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
        Institutions de la République
      </Typography>

      {/* Cartes des institutions */}
      <Grid container spacing={4}>
        {institutions.map((institution) => (
          <Grid item xs={12} sm={6} md={4} key={institution.id}>
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
                image={institution.logo}
                alt={institution.name}
                sx={{ borderRadius: '4px 4px 0 0' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#004080', mb: 1 }}
                >
                  {institution.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#555', mb: 2, textAlign: 'justify' }}
                >
                  {institution.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleOpenModal(institution)}
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal pour les détails des institutions */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={openModal}>
          <Box
            sx={{
              position: 'fixed',
              top: '10%',
              left: '10%',
              width: '80%',
              maxHeight: '80%',
              backgroundColor: 'white',
              boxShadow: 24,
              p: 3,
              overflowY: 'auto',
              borderRadius: '12px',
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedInstitution && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedInstitution.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, textAlign: 'justify' }}
                >
                  {selectedInstitution.details}
                </Typography>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default InstitutionsPage;
