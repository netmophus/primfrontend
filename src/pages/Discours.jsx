import  { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Slide,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const discours = [
  {
    id: 1,
    title: 'Discours à la nation sur les réformes économiques',
    image: 'https://via.placeholder.com/300',
    content:
      'Texte complet du discours sur les réformes économiques et les nouvelles mesures.',
  },
  {
    id: 2,
    title: 'Allocution lors du sommet pour la paix',
    image: 'https://via.placeholder.com/300',
    content: 'Discours prononcé lors du sommet pour la paix et la coopération régionale.',
  },
  {
    id: 3,
    title: 'Message de nouvel an à la nation',
    image: 'https://via.placeholder.com/300',
    content: 'Message de nouvel an du Premier Ministre à la population.',
  },
];

const Discours = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDiscours, setSelectedDiscours] = useState(null);

  const handleOpenModal = (discours) => {
    setSelectedDiscours(discours);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDiscours(null);
  };

  return (
    <Box sx={{ py: 5, backgroundColor: '#f9f9f9' }}>
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
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Discours officiels
        </Typography>

        {/* Conteneur de pagination */}
        <Box id="swiper-pagination" sx={{ display: 'flex', justifyContent: 'flex-end' }} />
      </Box>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          960: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        style={{ padding: '0 20px' }}
      >
        {discours.map((d) => (
          <SwiperSlide key={d.id}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onClick={() => handleOpenModal(d)}
            >
              <CardMedia
                component="img"
                height="200"
                image={d.image}
                alt={d.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {d.title}
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
        BackdropProps={{ timeout: 500 }}
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
            {selectedDiscours && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedDiscours.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {selectedDiscours.content}
                </Typography>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default Discours;
