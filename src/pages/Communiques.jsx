import  { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Slide,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const communiques = [
  {
    id: 1,
    title: 'Communiqué sur les nouvelles mesures sanitaires',
    image: 'https://via.placeholder.com/300',
    content: 'Détails sur les nouvelles mesures sanitaires adoptées par le gouvernement.',
  },
  {
    id: 2,
    title: 'Annonce de la session parlementaire spéciale',
    image: 'https://via.placeholder.com/300',
    content: 'Informations sur la session parlementaire spéciale organisée cette semaine.',
  },
  {
    id: 3,
    title: 'Programme de développement rural 2024',
    image: 'https://via.placeholder.com/300',
    content: 'Le gouvernement présente son programme pour le développement rural en 2024.',
  },
  {
    id: 4,
    title: 'Réforme du système éducatif',
    image: 'https://via.placeholder.com/300',
    content: 'Détails sur la réforme du système éducatif prévue pour la prochaine rentrée.',
  },
  {
    id: 5,
    title: 'Lancement du projet d’énergies renouvelables',
    image: 'https://via.placeholder.com/300',
    content: 'Le gouvernement lance un projet ambitieux pour les énergies renouvelables.',
  },
  {
    id: 6,
    title: 'Annonce d’un sommet diplomatique',
    image: 'https://via.placeholder.com/300',
    content: 'Détails sur le sommet diplomatique organisé la semaine prochaine.',
  },
];

const Communiques = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCommunique, setSelectedCommunique] = useState(null);

  const handleOpenModal = (communique) => {
    setSelectedCommunique(communique);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCommunique(null);
  };

  return (
    <Box sx={{ py: 5, backgroundColor: '#f9f9f9' }}>
      {/* Bandeau du titre avec pagination à droite */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#004080',
          color: 'white',
          px: 3,
          py: 2,
          borderRadius: '8px',
          mb: 3,
        }}
      >
    <Typography
  variant="h5"
  sx={{
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Empêche le texte de passer à la ligne
       
  }}
>
  Communiqués du Gouvernement
</Typography>


        {/* Conteneur de pagination */}
        <Box id="swiper-pagination" sx={{ display: 'flex', justifyContent: 'flex-end' }} />
      </Box>

      {/* Slider des cartes */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: '#swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        style={{
          padding: '0 20px',
        }}
      >
        {communiques.map((communique) => (
          <SwiperSlide key={communique.id}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => handleOpenModal(communique)}
            >
              <CardMedia
                component="img"
                height="200"
                image={communique.image}
                alt={communique.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {communique.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lire la suite...
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal pour afficher les détails */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="left" in={openModal}>
          <Box
            sx={{
              position: 'fixed',
              right: 0,
              top: 0,
              width: { xs: '100%', sm: '400px' },
              height: '100%',
              backgroundColor: 'white',
              boxShadow: 24,
              p: 3,
              overflowY: 'auto',
              borderRadius: { xs: '0px', sm: '12px 0 0 12px' },
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            {selectedCommunique && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedCommunique.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedCommunique.content}
                </Typography>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default Communiques;
