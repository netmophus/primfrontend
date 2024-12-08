// import { useState } from 'react';
// import { Box, Typography, Tabs, Tab } from '@mui/material';
// import Audiences from '../pages/Audiences';
// import Communiques from '../pages/Communiques';
// import Discours from '../pages/Discours';

// const TabsPage = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', minHeight: '100vh', mt: 5}}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase', mb: 5 }}
//       >
//         Informations Officielles
//       </Typography>

//       {/* Onglets */}
//       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           textColor="primary"
//           indicatorColor="primary"
//           sx={{
//             '.MuiTab-root': { fontSize: '1.2rem', fontWeight: 'bold' }, // Taille et poids du texte
//             '.MuiTab-root:hover': { color: '#004080' }, // Couleur au survol
//           }}
//         >
//           <Tab label="Audiences" />
//           <Tab label="Communiqués" />
//           <Tab label="Discours" />
//           <Tab label="Actualités" />
//         </Tabs>
//       </Box>

//       {/* Contenu des onglets */}
//       <Box>
//         {activeTab === 0 && <Audiences />}
//         {activeTab === 1 && <Communiques />}
//         {activeTab === 2 && <Discours />}
//         {activeTab === 3 && <Communiques />}
//       </Box>
//     </Box>
//   );
// };

// export default TabsPage;


//==========================================




// import { useState, useEffect } from 'react';
// import { Box, Typography, Tabs, Tab, Card, CardContent, CardMedia } from '@mui/material';
// import axios from 'axios';

// const TabsPage = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [onglets, setOnglets] = useState([]); // Stocker les onglets récupérés
//   const [cards, setCards] = useState([]); // Stocker les cartes associées à l’onglet actif

//   const API_URL = 'http://localhost:5000/infoofficielle';

//   // Récupération des onglets
//   useEffect(() => {
//     const fetchOnglets = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         const config = { headers: { Authorization: `Bearer ${token}` } };
//         const response = await axios.get(`${API_URL}/front/onglets`, config);
//         console.log('Onglets récupérés :', response.data);
//         setOnglets(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des onglets :', error);
//       }
//     };

//     fetchOnglets();
//   }, []);

//   // Récupération des cartes de l’onglet actif
// useEffect(() => {
//   if (onglets.length > 0) {
//     const fetchCards = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         const config = { headers: { Authorization: `Bearer ${token}` } };
//         const response = await axios.get(`${API_URL}/front/cards/${onglets[activeTab]._id}`, config);
//         console.log(`Cartes pour l'onglet ${onglets[activeTab].name} :`, response.data);
//         setCards(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des cartes :', error);
//       }
//     };

//     fetchCards();
//   }
// }, [activeTab, onglets]);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', minHeight: '100vh', mt: 5 }}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase', mb: 5 }}
//       >
//         Informations Officielles
//       </Typography>

//       {/* Onglets dynamiques */}
//       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           textColor="primary"
//           indicatorColor="primary"
//           sx={{
//             '.MuiTab-root': { fontSize: '1.2rem', fontWeight: 'bold' }, // Taille et poids du texte
//             '.MuiTab-root:hover': { color: '#004080' }, // Couleur au survol
//           }}
//         >
//           {onglets.map((onglet) => (
//             <Tab key={onglet._id} label={onglet.name} />
//           ))}
//         </Tabs>
//       </Box>

//       {/* Contenu dynamique */}
//       <Box>
//         {cards.length > 0 ? (
//          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mb: 5 }}>
//          {cards.map((card) => (
//           <Card
//           key={card._id}
//           sx={{
//             maxWidth: 400,
//             boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Effet d'ombre
//             borderRadius: '12px', // Coins arrondis
//             overflow: 'hidden',
//             transition: 'transform 0.3s, box-shadow 0.3s', // Animation sur le survol
//             '&:hover': {
//               transform: 'scale(1.05)', // Agrandir légèrement
//               boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)', // Ombre plus prononcée au survol
//             },
//             cursor: 'pointer',
//           }}
//         >
          

//           <CardMedia
//   component="img"
//   height="300"
//   image={card.image ? `http://localhost:5000${card.image}` : '/path/to/default-image.jpg'}
//   alt={card.description || 'Image'}
//   sx={{ objectFit: 'cover' }}
// />







//           <CardContent>
//             <Typography variant="h6" gutterBottom>
//               {card.name || 'Titre de la carte'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {card.description || 'Description indisponible.'}
//             </Typography>
//           </CardContent>
//         </Card>
        
//          ))}
//        </Box>
       
//         ) : (
//           <Typography align="center" sx={{ mt: 3 }}>
//             Aucun contenu disponible pour cet onglet.
//           </Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default TabsPage;



//======================================


import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Modal,
  IconButton,
  Slide
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [onglets, setOnglets] = useState([]); // Stocker les onglets récupérés
  const [cards, setCards] = useState([]); // Stocker les cartes associées à l’onglet actif
  const [openModal, setOpenModal] = useState(false); // État pour le modal
 
  const API_URL = 'http://localhost:5000/infoofficielle';
  const [selectedArticle, setSelectedArticle] = useState(null);



  // Récupération des onglets
  useEffect(() => {
    const fetchOnglets = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.get(`${API_URL}/front/onglets`, config);
        console.log('Onglets récupérés :', response.data);
        setOnglets(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des onglets :', error);
      }
    };

    fetchOnglets();
  }, []);

  // Récupération des cartes de l’onglet actif
  useEffect(() => {
    if (onglets.length > 0) {
      const fetchCards = async () => {
        try {
          const token = localStorage.getItem('authToken');
          const config = { headers: { Authorization: `Bearer ${token}` } };
          const response = await axios.get(`${API_URL}/front/cards/${onglets[activeTab]._id}`, config);
          console.log(`Cartes pour l'onglet ${onglets[activeTab].name} :`, response.data);
          setCards(response.data);
        } catch (error) {
          console.error('Erreur lors de la récupération des cartes :', error);
        }
      };

      fetchCards();
    }
  }, [activeTab, onglets]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };



  const handleCloseModal = () => {  
    setOpenModal(false);
  };


 
  
  const fetchArticleByCardId = async (cardId) => {
    try {
      const token = localStorage.getItem('authToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(`${API_URL}/front/articles/${cardId}`, config);
      console.log('Article récupéré :', response.data);
      setSelectedArticle(response.data[0]); // On récupère le premier article lié à la carte
      setOpenModal(true); // Ouvre le modal
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'article :', error);
    }
  };
  

  

  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', minHeight: '100vh', mt: 5 }}>
      {/* Titre principal */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase', mb: 5 }}
      >
        Informations Officielles
      </Typography>

      {/* Onglets dynamiques */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{
            '.MuiTab-root': { fontSize: '1.2rem', fontWeight: 'bold' }, // Taille et poids du texte
            '.MuiTab-root:hover': { color: '#004080' }, // Couleur au survol
          }}
        >
          {onglets.map((onglet) => (
            <Tab key={onglet._id} label={onglet.name} />
          ))}
        </Tabs>
      </Box>

      {/* Contenu dynamique */}
      <Box>
        {cards.length > 0 ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', mb: 5 }}>
            {cards.map((card) => (




<Card
  key={card._id}
  sx={{
    maxWidth: 400,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },
    cursor: 'pointer',
  }}
  onClick={() => fetchArticleByCardId(card._id)} // Appel direct de la fonction
>
  <CardMedia
    component="img"
    height="300"
    image={card.image ? `http://localhost:5000${card.image}` : '/path/to/default-image.jpg'}
    alt={card.description || 'Image'}
    sx={{ objectFit: 'cover' }}
  />
  <CardContent>
    {/* <Typography variant="h6" gutterBottom>
      {card.name || 'Titre de la carte'}
    </Typography> */}
    <Typography variant="body2" color="text.secondary">
      {card.description || 'Description indisponible.'}
    </Typography>
  </CardContent>
</Card>

            

            
            ))}
          </Box>
        ) : (
          <Typography align="center" sx={{ mt: 3 }}>
            Aucun contenu disponible pour cet onglet.
          </Typography>
        )}
      </Box>





      {/* Modal */}
      <Modal
  open={openModal}
  onClose={handleCloseModal}
  closeAfterTransition
  BackdropProps={{
    timeout: 500,
  }}
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backdropFilter: 'blur(6px)',
  }}
>
  <Slide direction="left" in={openModal}>
    <Box
      sx={{
        width: '85%',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: 24,
        borderRadius: '8px 0 0 8px',
        overflowY: 'auto',
        position: 'relative',
        p: 4,
      }}
    >
      {/* Bouton de fermeture */}
      <IconButton
        onClick={handleCloseModal}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        }}
      >
        <CloseIcon />
      </IconButton>

      {selectedArticle && (
        <>
          {/* Titre de l'article */}
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: '#004080',
              textAlign: 'center',
            }}
          >
            {selectedArticle.title || 'Titre indisponible'}
          </Typography>

          {/* Contenu de l'article */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: '#333',
              lineHeight: 1.8,
              textAlign: 'justify',
            }}
          >
            {selectedArticle.content || 'Contenu indisponible'}
          </Typography>

          {/* Images */}
       {/* Images */}
{selectedArticle.images && selectedArticle.images.length > 0 && (
  <Box sx={{ mb: 4 }}>
    {/* <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#004080' }}>
      Images
    </Typography> */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 3,
      }}
    >
      {selectedArticle.images
        .filter((image) => image.url) // Filtrer les images sans URL
        .map((image) => (
          <Box key={image._id}>
            <CardMedia
              component="img"
              height="200"
              image={`http://localhost:5000${image.url}`}
              alt={image.description || 'Image'}
              sx={{
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                mb: 1,
              }}
            />
            {image.description && ( // Vérifier s'il y a une description avant de l'afficher
              <Typography variant="body2" color="text.secondary">
                {image.description}
              </Typography>
            )}
          </Box>
        ))}
    </Box>
  </Box>
)}


          {/* Vidéos */}
         {/* Vidéos */}
{selectedArticle.videos && selectedArticle.videos.length > 0 && (
  <Box sx={{ mb: 4 }}>
    {/* <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#004080' }}>
      Vidéos
    </Typography> */}
    {selectedArticle.videos
      .filter((video) => video.url) // Filtrer les vidéos sans URL
      .map((video) => (
        <Box key={video._id} sx={{ mb: 3 }}>
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={video.description || 'Vidéo'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          ></iframe>
          {video.description && ( // Vérifier s'il y a une description avant de l'afficher
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {video.description}
            </Typography>
          )}
        </Box>
      ))}
  </Box>
)}

        </>
      )}
    </Box>
  </Slide>
      </Modal>


    </Box>
  );
};

export default TabsPage;
