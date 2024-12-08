import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Slide,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const categories = ['Politique', 'Économie', 'Diplomatie', 'Santé/Sport', 'Société', 'Éducation'];
const articles = {
  Politique: [
    { id: 1, title: 'Réforme politique majeure', image: 'https://via.placeholder.com/300', content: 'Contenu de l\'article politique 1.' },
    { id: 2, title: 'Nouvelles lois adoptées', image: 'https://via.placeholder.com/300', content: 'Contenu de l\'article politique 2.' },
  ],
  Économie: [
    { id: 1, title: 'Croissance économique 2024', image: 'https://via.placeholder.com/300', content: 'Contenu de l\'article économie 1.' },
    { id: 2, title: 'Investissements étrangers', image: 'https://via.placeholder.com/300', content: 'Contenu de l\'article économie 2.' },
  ],
  // Ajoutez des données pour les autres catégories
};

const Actualites = () => {
  const [activeTab, setActiveTab] = useState('Politique');
  const [openModal, setOpenModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedArticle(null);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Titre principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Actualités
      </Typography>
      <Box
        sx={{
          width: '100px',
          height: '4px',
          backgroundColor: '#004080',
          mx: 'auto',
          mb: 3,
          borderRadius: '4px',
        }}
      />

      {/* Onglets modernes */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        {categories.map((category) => (
          <Box
            key={category}
            onClick={() => setActiveTab(category)}
            sx={{
              px: 3,
              py: 1,
              cursor: 'pointer',
              borderRadius: '20px',
              backgroundColor: activeTab === category ? '#004080' : '#fff',
              color: activeTab === category ? '#fff' : '#004080',
              boxShadow: activeTab === category ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
              transition: 'all 0.3s',
              '&:hover': {
                backgroundColor: '#004080',
                color: '#fff',
              },
            }}
          >
            <Typography variant="body1">{category}</Typography>
          </Box>
        ))}
      </Box>

      {/* Cartes modernes */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {articles[activeTab]?.map((article) => (
          <Card
            key={article.id}
            sx={{
              maxWidth: 300,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              cursor: 'pointer',
            }}
            onClick={() => handleOpenModal(article)}
          >
            <CardMedia
              component="img"
              height="180"
              image={article.image}
              alt={article.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lire la suite...
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Modal moderne */}
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
            {selectedArticle && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedArticle.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                  {selectedArticle.content}
                </Typography>
              </>
            )}
          </Box>
        </Slide>
      </Modal>
    </Box>
  );
};

export default Actualites;
