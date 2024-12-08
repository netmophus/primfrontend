// import React from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   CardActions,
//   IconButton,
//   Button,
// } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// // Liste fictive des ministres
// const membres = Array.from({ length: 26 }, (_, index) => ({
//   id: index + 1,
//   name: `Ministre ${index + 1}`,
//   portfolio: `Portefeuille Ministériel ${index + 1}`,
//   image: 'https://via.placeholder.com/150', // Remplacez par les vraies photos
//   facebook: `https://facebook.com/ministre${index + 1}`,
//   twitter: `https://twitter.com/ministre${index + 1}`,
//   linkedin: `https://linkedin.com/in/ministre${index + 1}`,
//   website: `https://ministre${index + 1}.gov.ni`,
// }));

// const MembresGouvernement = () => {
//   return (
//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{
//           fontWeight: 'bold',
//           color: '#004080',
//           textTransform: 'uppercase',
//           mb: 3,
//         }}
//       >
//         Membres du Gouvernement
//       </Typography>

//       {/* Grille des cartes */}
//       <Grid container spacing={4}>
//         {membres.map((membre) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={membre.id}>
//             <Card
//               sx={{
//                 borderRadius: '16px',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 overflow: 'hidden',
//                 '&:hover': {
//                   transform: 'scale(1.02)',
//                   transition: 'transform 0.3s ease-in-out',
//                 },
//               }}
//             >
//               {/* Photo du ministre */}
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={membre.image}
//                 alt={membre.name}
//               />

//               {/* Contenu */}
//               <CardContent sx={{ textAlign: 'center' }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                   {membre.name}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="textSecondary"
//                   sx={{ mt: 1, mb: 2 }}
//                 >
//                   {membre.portfolio}
//                 </Typography>
//               </CardContent>

//               {/* Réseaux sociaux */}
//               <CardActions sx={{ justifyContent: 'center' }}>
//                 <IconButton
//                   component="a"
//                   href={membre.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     color: '#4267B2',
//                     '&:hover': { color: '#365899' },
//                   }}
//                 >
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton
//                   component="a"
//                   href={membre.twitter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     color: '#1DA1F2',
//                     '&:hover': { color: '#0d8ddb' },
//                   }}
//                 >
//                   <TwitterIcon />
//                 </IconButton>
//                 <IconButton
//                   component="a"
//                   href={membre.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     color: '#0077B5',
//                     '&:hover': { color: '#005582' },
//                   }}
//                 >
//                   <LinkedInIcon />
//                 </IconButton>
//               </CardActions>

//               {/* Lien vers le site personnel */}
//               <Box sx={{ textAlign: 'center', pb: 2 }}>
//                 <Button
//                   component="a"
//                   href={membre.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   sx={{
//                     textTransform: 'none',
//                     color: '#004080',
//                     fontWeight: 'bold',
//                     '&:hover': { textDecoration: 'underline' },
//                   }}
//                 >
//                   Voir le site personnel
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default MembresGouvernement;

import  { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axios from 'axios';

const MembresGouvernement = () => {
  const [ministers, setMinisters] = useState([]); // Initialisation de l'état pour les ministres
  const [error, setError] = useState('');

  // Charger les ministres depuis l'API au montage du composant
  useEffect(() => {
    const fetchMinisters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ministre/api/ministers');
        setMinisters(response.data); // Mise à jour de l'état avec les données récupérées
      } catch (error) {
        console.error('Erreur lors du chargement des ministres :', error);
        setError('Impossible de charger les ministres');
      }
    };

    fetchMinisters();
  }, []); // Le tableau vide [] assure que l'effet est exécuté une seule fois au montage

  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#004080', marginBottom: 8 }}>
        Membres du Gouvernement
      </Typography>

      {error && <Typography color="error" align="center">{error}</Typography>}

      <Grid container spacing={4}>
        {ministers.map((minister) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={minister._id}>
            {/* <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                },
                backgroundColor: '#fff',
              }}
            > */}


<Card
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',  // Assurez-vous que la carte occupe toute la hauteur disponible
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    },
  }}
>






              {/* <CardMedia
                component="img"
                height="200"
                image={`http://localhost:5000/${minister.image}`}
                alt={minister.name}
                sx={{
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              /> */}

<CardMedia
  component="img"
  height="250"  // Définir une hauteur fixe pour toutes les images
  image={`http://localhost:5000/${minister.image}`}
  alt={minister.name}
  sx={{
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }}
/>


              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                  {minister.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                  {minister.portfolio}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center' }}>
                <IconButton
                  component="a"
                  href={minister.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#4267B2',
                    '&:hover': { color: '#365899' },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={minister.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#1DA1F2',
                    '&:hover': { color: '#0d8ddb' },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href={minister.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#0077B5',
                    '&:hover': { color: '#005582' },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </CardActions>

              <Box sx={{ textAlign: 'center', pb: 2 }}>
                <Button
                  component="a"
                  href={minister.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'none',
                    color: '#004080',
                    fontWeight: 'bold',
                    '&:hover': { textDecoration: 'underline' },
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    padding: '6px 20px',
                  }}
                >
                  Voir le site personnel
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MembresGouvernement;



