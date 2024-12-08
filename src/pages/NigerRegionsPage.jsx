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

// Exemple de données fictives pour les régions
const regions = [
  {
    id: 1,
    name: 'Agadez',
    image: 'https://via.placeholder.com/300', // Remplacez par une image significative
    description: 'La région d’Agadez est célèbre pour ses paysages désertiques et son patrimoine culturel.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Exemple de vidéo
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 2,
    name: 'Diffa',
    image: 'https://via.placeholder.com/300',
    description: 'La région de Diffa est connue pour le lac Tchad et ses activités agricoles.',
    video: 'https://www.w3schools.com/html/movie.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 3,
    name: 'Dosso',
    image: 'https://via.placeholder.com/300',
    description: 'Dosso est le berceau des traditions culturelles et de l’histoire du Niger.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 4,
    name: 'Maradi',
    image: 'https://via.placeholder.com/300',
    description: 'La région de Maradi est un centre économique et agricole du Niger.',
    video: 'https://www.w3schools.com/html/movie.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 5,
    name: 'Niamey',
    image: 'https://via.placeholder.com/300',
    description: 'La capitale du Niger, Niamey, est le cœur administratif et économique.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 6,
    name: 'Tahoua',
    image: 'https://via.placeholder.com/300',
    description: 'Tahoua est connue pour ses paysages et ses marchés traditionnels.',
    video: 'https://www.w3schools.com/html/movie.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 7,
    name: 'Tillabéri',
    image: 'https://via.placeholder.com/300',
    description: 'Tillabéri est riche en culture et en ressources naturelles.',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
  {
    id: 8,
    name: 'Zinder',
    image: 'https://via.placeholder.com/300',
    description: 'Zinder est une région historique et un carrefour commercial.',
    video: 'https://www.w3schools.com/html/movie.mp4',
    images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
  },
];

const NigerRegionsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleOpenModal = (region) => {
    setSelectedRegion(region);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRegion(null);
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
        Le Niger en Bref
      </Typography>

      {/* Cartes des régions */}
      <Grid container spacing={4}>
        {regions.map((region) => (
          <Grid item xs={12} sm={6} md={4} key={region.id}>
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
                image={region.image}
                alt={region.name}
                sx={{
                  borderRadius: '4px 4px 0 0',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', color: '#004080', mb: 1 }}
                >
                  {region.name}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenModal(region)}
                  sx={{ mt: 1 }}
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal pour les détails des régions */}
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
            {selectedRegion && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedRegion.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {selectedRegion.description}
                </Typography>
                <Grid container spacing={2}>
                  {selectedRegion.images.map((img, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <img
                        src={img}
                        alt={`Region ${selectedRegion.name} - ${index}`}
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <video
                  controls
                  style={{
                    width: '100%',
                    marginTop: '20px',
                    borderRadius: '8px',
                  }}
                >
                  <source src={selectedRegion.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default NigerRegionsPage;
