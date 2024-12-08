import { useState } from 'react';
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

const audiences = [
  {
    id: 1,
    title: 'Rencontre avec le Président de la Banque Mondiale',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur la rencontre avec le Président de la Banque Mondiale.',
  },
  {
    id: 2,
    title: 'Entretien avec le Ministre des Affaires Étrangères',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur l\'entretien avec le Ministre des Affaires Étrangères.',
  },
  {
    id: 3,
    title: 'Audience avec les représentants des Nations Unies',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur l\'audience avec les représentants des Nations Unies.',
  },
  {
    id: 4,
    title: 'Réunion sur les investissements étrangers',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur la réunion sur les investissements étrangers.',
  },
  {
    id: 5,
    title: 'Conférence de presse avec des ONG locales',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur la conférence de presse avec des ONG locales.',
  },
  {
    id: 6,
    title: 'Rencontre avec le Ministre de la Santé',
    image: 'https://via.placeholder.com/300',
    content: 'Contenu de l\'article sur la rencontre avec le Ministre de la Santé.',
  },
];

const Audiences = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState(null);

  const handleOpenModal = (audience) => {
    setSelectedAudience(audience);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAudience(null);
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
        variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Audiences du Premier Ministre
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
        {audiences.map((audience) => (
          <SwiperSlide key={audience.id}>
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
              onClick={() => handleOpenModal(audience)}
            >
              <CardMedia
                component="img"
                height="200"
                image={audience.image}
                alt={audience.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {audience.title}
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
            {selectedAudience && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedAudience.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedAudience.content}
                </Typography>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default Audiences;
