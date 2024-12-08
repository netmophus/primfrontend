import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Modal,
  Slide,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Liste fictive des secteurs d'opportunités
const secteurs = [
  {
    id: 1,
    name: 'Agriculture',
    contribution: '25%',
    description: "L'agriculture est le moteur principal de l'économie nigérienne.",
    image: 'https://via.placeholder.com/300', // Remplacez par une image réelle
    modalContent: {
      text: "L'agriculture est une opportunité clé pour le Niger, avec un potentiel élevé pour l'exportation et la sécurité alimentaire.",
      images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  },
  {
    id: 2,
    name: 'Élevage',
    contribution: '18%',
    description: "L'élevage joue un rôle crucial dans la subsistance des communautés rurales.",
    image: 'https://via.placeholder.com/300',
    modalContent: {
      text: "Le secteur de l'élevage est un levier important pour les exportations et la création d'emplois.",
      images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
      video: 'https://www.w3schools.com/html/movie.mp4',
    },
  },
  {
    id: 3,
    name: 'Énergie',
    contribution: '12%',
    description: "Le développement des énergies renouvelables est une priorité nationale.",
    image: 'https://via.placeholder.com/300',
    modalContent: {
      text: "L'énergie, notamment solaire, est une opportunité pour améliorer l'accès à l'électricité et attirer des investissements.",
      images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  },
  {
    id: 4,
    name: 'Mines',
    contribution: '30%',
    description: "Le Niger est riche en ressources minières comme l'uranium et le pétrole.",
    image: 'https://via.placeholder.com/300',
    modalContent: {
      text: "Les mines sont un secteur stratégique pour les exportations et le développement économique du Niger.",
      images: ['https://via.placeholder.com/400', 'https://via.placeholder.com/400'],
      video: 'https://www.w3schools.com/html/movie.mp4',
    },
  },
  // Ajoutez les autres secteurs ici
];

const SecteursPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSecteur, setSelectedSecteur] = useState(null);

  const handleOpenModal = (secteur) => {
    setSelectedSecteur(secteur);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedSecteur(null);
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
        Secteurs d'Opportunités
      </Typography>

      {/* Cartes des secteurs */}
      <Grid container spacing={4}>
        {secteurs.map((secteur) => (
          <Grid item xs={12} sm={6} md={4} key={secteur.id}>
            <Card
              sx={{
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${secteur.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                }}
              ></Box>
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {secteur.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {secteur.description}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 2 }}>
                  Contribution au PIB : {secteur.contribution}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenModal(secteur)}
                >
                  Savoir plus
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal pour les détails des secteurs */}
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
            {selectedSecteur && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedSecteur.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {selectedSecteur.modalContent.text}
                </Typography>
                <Grid container spacing={2}>
                  {selectedSecteur.modalContent.images.map((img, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <img
                        src={img}
                        alt={`Secteur ${selectedSecteur.name} - ${index}`}
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
                  <source src={selectedSecteur.modalContent.video} type="video/mp4" />
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

export default SecteursPage;
