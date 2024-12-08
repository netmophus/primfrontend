// import  { useState } from 'react';
// import { Box, Typography, Grid, Card, CardMedia, Modal, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// const photoCategories = [
//   { id: 1, name: 'Événements', photos: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300'] },
//   { id: 2, name: 'Rencontres', photos: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300'] },
//   { id: 3, name: 'Projets', photos: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300'] },
//   { id: 4, name: 'Conférences', photos: ['https://via.placeholder.com/300', 'https://via.placeholder.com/300'] },
// ];

// const videoCategories = [
//   { id: 1, name: 'Discours', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'] },
//   { id: 2, name: 'Interviews', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'] },
//   { id: 3, name: 'Reportages', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'] },
//   { id: 4, name: 'Documentaires', videos: ['https://www.w3schools.com/html/mov_bbb.mp4'] },
// ];

// const MediaPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedMedia, setSelectedMedia] = useState(null);
//   const [mediaType, setMediaType] = useState('photo'); // 'photo' or 'video'

//   const handleCategoryClick = (category, type) => {
//     setSelectedCategory(category);
//     setMediaType(type);
//   };

//   const handleClose = () => {
//     setSelectedCategory(null);
//     setSelectedMedia(null);
//   };

//   return (

//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', mt: -10}}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase' }}
//       >
//        Mediatechque
//       </Typography>


  
//     <Box sx={{ display: 'flex',  backgroundColor: '#f9f9f9', p: 3 }}>
          
     
//       {/* Section des photos */}
//       <Box sx={{ width: '50%', pr: 2 }}>
//         <Box
//           sx={{
//             backgroundColor: '#4caf50', // Vert
//             color: 'white',
//             py: 2,
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//             Photos
//           </Typography>
//         </Box>
//         <Grid container spacing={2} sx={{ mt: 2 }}>
//           {photoCategories.map((category) => (
//             <Grid item xs={6} key={category.id}>
//               <Card
//                 sx={{ cursor: 'pointer', textAlign: 'center', p: 2, border: '1px solid #ddd' }}
//                 onClick={() => handleCategoryClick(category, 'photo')}
//               >
//                 <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                   {category.name}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Section des vidéos */}
//       <Box sx={{ width: '50%', pl: 2 }}>
//         <Box
//           sx={{
//             backgroundColor: '#ff9800', // Orange
//             color: 'white',
//             py: 2,
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//             Vidéos
//           </Typography>
//         </Box>
//         <Grid container spacing={2} sx={{ mt: 2 }}>
//           {videoCategories.map((category) => (
//             <Grid item xs={6} key={category.id}>
//               <Card
//                 sx={{ cursor: 'pointer', textAlign: 'center', p: 2, border: '1px solid #ddd' }}
//                 onClick={() => handleCategoryClick(category, 'video')}
//               >
//                 <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                   {category.name}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Modal pour afficher les médias */}
//       <Modal open={!!selectedCategory} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '10%',
//             left: '10%',
//             width: '80%',
//             height: '80%',
//             backgroundColor: 'white',
//             boxShadow: 24,
//             overflowY: 'auto',
//             p: 3,
//           }}
//         >
//           <IconButton
//             sx={{ position: 'absolute', top: 10, right: 10 }}
//             onClick={handleClose}
//           >
//             <CloseIcon />
//           </IconButton>
//           {mediaType === 'photo' && selectedCategory && (
//             <Box>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 {selectedCategory.name} - Photos
//               </Typography>
//               <Grid container spacing={2}>
//                 {selectedCategory.photos.map((photo, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={index}>
//                     <Card>
//                       <CardMedia component="img" image={photo} alt={`Photo ${index}`} />
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//           )}
//           {mediaType === 'video' && selectedCategory && (
//             <Box>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 {selectedCategory.name} - Vidéos
//               </Typography>
//               {selectedCategory.videos.map((video, index) => (
//                 <Box key={index} sx={{ mb: 2 }}>
//                   <video controls style={{ width: '100%' }}>
//                     <source src={video} type="video/mp4" />
//                     Votre navigateur ne supporte pas la lecture de vidéos.
//                   </video>
//                 </Box>
//               ))}
//             </Box>
//           )}
//         </Box>
//       </Modal>
//     </Box>
//     </Box>
//   );
// };

// export default MediaPage;



//======================================


// import { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   Modal,
//   IconButton,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Assurez-vous que cela correspond à l'URL de votre backend

// const MediaPage = () => {
//   const [photoCategories, setPhotoCategories] = useState([]);
//   const [videoCategories, setVideoCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [mediaType, setMediaType] = useState('photo'); // 'photo' ou 'video'

//   // Charger les catégories dynamiques
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       // Récupérer toutes les catégories
//       const categoriesResponse = await axios.get(`${API_URL}/categories/getCategoriesFront`);
//       const categories = categoriesResponse.data;

//       // Récupérer les médias pour chaque catégorie
//       const photoCategoriesData = [];
//       const videoCategoriesData = [];

//       for (const category of categories) {
//         const mediaResponse = await axios.get(`${API_URL}/media/getMediaByCategoryFront/${category._id}`);
//         const mediaList = mediaResponse.data;

//         if (category.type === 'image') {
//           photoCategoriesData.push({
//             id: category._id,
//             name: category.name,
//             photos: mediaList.map((media) => `http://localhost:5000${media.url}`),
//           });
//         } else if (category.type === 'video') {
//           videoCategoriesData.push({
//             id: category._id,
//             name: category.name,
//             videos: mediaList.map((media) => `http://localhost:5000${media.url}`),
//           });
//         }
//       }

//       setPhotoCategories(photoCategoriesData);
//       setVideoCategories(videoCategoriesData);
//     } catch (error) {
//       console.error('Erreur lors de la récupération des catégories ou médias :', error);
//     }
//   };

//   const handleCategoryClick = (category, type) => {
//     setSelectedCategory(category);
//     setMediaType(type);
//   };

//   const handleClose = () => {
//     setSelectedCategory(null);
//   };

//   return (
//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', mt: -10 }}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase' }}
//       >
//         Médiathèque
//       </Typography>

//       <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9', p: 3 }}>
//         {/* Section des photos */}
//         <Box sx={{ width: '50%', pr: 2 }}>
//           <Box
//             sx={{
//               backgroundColor: '#4caf50', // Vert
//               color: 'white',
//               py: 2,
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//               Photos
//             </Typography>
//           </Box>
//           <Grid container spacing={2} sx={{ mt: 2 }}>
//             {photoCategories.map((category) => (
//               <Grid item xs={6} key={category.id}>
//                 <Card
//                   sx={{ cursor: 'pointer', textAlign: 'center', p: 2, border: '1px solid #ddd' }}
//                   onClick={() => handleCategoryClick(category, 'photo')}
//                 >
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {category.name}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Section des vidéos */}
//         <Box sx={{ width: '50%', pl: 2 }}>
//           <Box
//             sx={{
//               backgroundColor: '#ff9800', // Orange
//               color: 'white',
//               py: 2,
//               textAlign: 'center',
//             }}
//           >
//             <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
//               Vidéos
//             </Typography>
//           </Box>
//           <Grid container spacing={2} sx={{ mt: 2 }}>
//             {videoCategories.map((category) => (
//               <Grid item xs={6} key={category.id}>
//                 <Card
//                   sx={{ cursor: 'pointer', textAlign: 'center', p: 2, border: '1px solid #ddd' }}
//                   onClick={() => handleCategoryClick(category, 'video')}
//                 >
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {category.name}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>

//       {/* Modal pour afficher les médias */}
//       <Modal open={!!selectedCategory} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '10%',
//             left: '10%',
//             width: '80%',
//             height: '80%',
//             backgroundColor: 'white',
//             boxShadow: 24,
//             overflowY: 'auto',
//             p: 3,
//           }}
//         >
//           <IconButton
//             sx={{ position: 'absolute', top: 10, right: 10 }}
//             onClick={handleClose}
//           >
//             <CloseIcon />
//           </IconButton>
//           {mediaType === 'photo' && selectedCategory && (
//             <Box>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 {selectedCategory.name} - Photos
//               </Typography>
//               <Grid container spacing={2}>
//                 {selectedCategory.photos.map((photo, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={index}>
//                     <Card>
//                       <CardMedia component="img" image={photo} alt={`Photo ${index}`} />
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Box>
//           )}
//           {mediaType === 'video' && selectedCategory && (
//             <Box>
//               <Typography variant="h6" sx={{ mb: 2 }}>
//                 {selectedCategory.name} - Vidéos
//               </Typography>
//               {selectedCategory.videos.map((video, index) => (
//                 <Box key={index} sx={{ mb: 2 }}>
//                   <video controls style={{ width: '100%' }}>
//                     <source src={video} type="video/mp4" />
//                     Votre navigateur ne supporte pas la lecture de vidéos.
//                   </video>
//                 </Box>
//               ))}
//             </Box>
//           )}
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default MediaPage;




import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Modal,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Assurez-vous que cela correspond à l'URL de votre backend

const MediaPage = () => {
  const [photoCategories, setPhotoCategories] = useState([]);
  const [videoCategories, setVideoCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mediaType, setMediaType] = useState('photo'); // 'photo' ou 'video'

  // Charger les catégories dynamiques
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Récupérer toutes les catégories
      const categoriesResponse = await axios.get(`${API_URL}/categories/getCategoriesFront`);
      const categories = categoriesResponse.data;

      // Récupérer les médias pour chaque catégorie
      const photoCategoriesData = [];
      const videoCategoriesData = [];

      for (const category of categories) {
        const mediaResponse = await axios.get(`${API_URL}/media/getMediaByCategoryFront/${category._id}`);
        const mediaList = mediaResponse.data;

        if (category.type === 'image') {
          photoCategoriesData.push({
            id: category._id,
            name: category.name,
            photos: mediaList.map((media) => `http://localhost:5000${media.url}`),
          });
        } else if (category.type === 'video') {
          videoCategoriesData.push({
            id: category._id,
            name: category.name,
            videos: mediaList.map((media) => `http://localhost:5000${media.url}`),
          });
        }
      }

      setPhotoCategories(photoCategoriesData);
      setVideoCategories(videoCategoriesData);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories ou médias :', error);
    }
  };

  const handleCategoryClick = (category, type) => {
    setSelectedCategory(category);
    setMediaType(type);
  };

  const handleClose = () => {
    setSelectedCategory(null);
  };

  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9', mt: -10 }}>
      {/* Titre principal */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase' }}
      >
        Médiathèque
      </Typography>

      <Box sx={{ display: 'flex', backgroundColor: '#f9f9f9', p: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Section des photos */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, pr: { md: 2 } }}>
          <Box
            sx={{
              backgroundColor: '#4caf50', // Vert
              color: 'white',
              py: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              Photos
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {photoCategories.map((category) => (
              <Grid item xs={6} sm={4} key={category.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 2,
                    border: '1px solid #ddd',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onClick={() => handleCategoryClick(category, 'photo')}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {category.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section des vidéos */}
        <Box sx={{ width: { xs: '100%', md: '50%' }, pl: { md: 2 }, mt: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              backgroundColor: '#ff9800', // Orange
              color: 'white',
              py: 2,
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              Vidéos
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {videoCategories.map((category) => (
              <Grid item xs={6} sm={4} key={category.id}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 2,
                    border: '1px solid #ddd',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onClick={() => handleCategoryClick(category, 'video')}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {category.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Modal pour afficher les médias */}
      <Modal open={!!selectedCategory} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: { xs: '90%', md: '80%' },
            height: { xs: '70%', md: '80%' },
            backgroundColor: 'white',
            boxShadow: 24,
            overflowY: 'auto',
            p: 3,
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {mediaType === 'photo' && selectedCategory && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedCategory.name} - Photos
              </Typography>
              <Grid container spacing={2}>
                {selectedCategory.photos.map((photo, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardMedia component="img" image={photo} alt={`Photo ${index}`} />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {mediaType === 'video' && selectedCategory && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedCategory.name} - Vidéos
              </Typography>
              {selectedCategory.videos.map((video, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <video controls style={{ width: '100%' }}>
                    <source src={video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default MediaPage;
