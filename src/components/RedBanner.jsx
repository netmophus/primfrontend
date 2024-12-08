// import  { useState } from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
// import CloseIcon from '@mui/icons-material/Close';

// const RedBanner = () => {
//   const [visible, setVisible] = useState(true); // État pour afficher ou masquer le bandeau

//   if (!visible) return null; // Si le bandeau est fermé, ne rien afficher

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#e63946',
//         py: 1,
//         px: 2,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}
//     >
//       {/* Icône et texte */}
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <InfoIcon sx={{ color: 'white', mr: 1 }} /> {/* Icône d'information */}
//         <Typography variant="body1" color="white">
//           Annonce importante : Découvrez les dernières actualités ici !
//         </Typography>
//       </Box>

//       {/* Bouton de fermeture */}
//       <IconButton onClick={() => setVisible(false)} sx={{ color: 'white' }}>
//         <CloseIcon />
//       </IconButton>
//     </Box>
//   );
// };

// export default RedBanner;


import  { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const RedBanner = () => {
  const [visible, setVisible] = useState(true);
  const [bannerText, setBannerText] = useState('');


  const [flashNewsList, setFlashNewsList] = useState([]);
const [currentFlashIndex, setCurrentFlashIndex] = useState(0);


useEffect(() => {
  const fetchBannerData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/inforedbanner/public/front');
      setBannerText(response.data.redBannerText);
      setFlashNewsList(response.data.newsFlash || []); // Récupérer les flash news
    } catch (error) {
      console.error('Erreur lors de la récupération des données du bandeau :', error);
    }
  };
  fetchBannerData();
}, []);


useEffect(() => {
  if (flashNewsList.length > 0) {
    const interval = setInterval(() => {
      setCurrentFlashIndex((prevIndex) => (prevIndex + 1) % flashNewsList.length);
    }, 3000);

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }
}, [flashNewsList]);

  useEffect(() => {
    const fetchBannerText = async () => {
      try {
        const response = await axios.get('http://localhost:5000/inforedbanner/public/front');
        setBannerText(response.data.redBannerText);
      } catch (error) {
        console.error('Erreur lors de la récupération du texte du bandeau :', error);
      }
    };
    fetchBannerText();
  }, []);

  if (!visible) return null;




  return (
    <Box
    sx={{
      backgroundColor: '#e63946',
      py: 2,
      px: 3,
      display: 'flex',
      flexDirection: 'column', // Met les enfants en colonne
      gap: 2, // Ajoute un espacement entre les Box
    }}
  >
    {/* Premier Box : Bannière principale */}
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InfoIcon sx={{ color: 'white', mr: 1 }} />
        <Typography variant="body1" color="white">
          {bannerText || 'Annonce importante : Découvrez les dernières actualités ici !'}
        </Typography>
      </Box>
      <IconButton onClick={() => setVisible(false)} sx={{ color: 'white' }}>
        <CloseIcon />
      </IconButton>
    </Box>
  
    {/* Deuxième Box : Flash News */}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <InfoIcon sx={{ color: 'white', mr: 1 }} />
      <Typography variant="body1" color="white">
        {flashNewsList.length > 0
          ? flashNewsList[currentFlashIndex]?.text
          : 'Aucun flash news disponible pour le moment.'}
      </Typography>
    </Box>
  </Box>
  
  );
};

export default RedBanner;
