
// import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

// const projets = [
//   {
//     id: 1,
//     category: 'Infrastructures',
//     title: 'Construction du pont national',
//     image: 'https://via.placeholder.com/300',
//     description: 'Un projet pour relier les régions et faciliter le commerce.',
//   },
//   {
//     id: 2,
//     category: 'Santé',
//     title: 'Nouvel hôpital moderne',
//     image: 'https://via.placeholder.com/300',
//     description: 'Un hôpital équipé pour répondre aux besoins de la population.',
//   },
//   {
//     id: 3,
//     category: 'Éducation',
//     title: 'Création d’écoles rurales',
//     image: 'https://via.placeholder.com/300',
//     description: 'Des écoles pour offrir un accès à l’éducation dans les régions reculées.',
//   },
//   {
//     id: 4,
//     category: 'Énergie',
//     title: 'Développement des énergies renouvelables',
//     image: 'https://via.placeholder.com/300',
//     description: 'Un projet pour améliorer l’accès à l’électricité verte.',
//   },
// ];

// const ProjetsPage = () => {
//   return (
//     <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9'}}>
//       {/* Titre principal */}
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase' }}
//       >
//         Grands Projets du Gouvernement
//       </Typography>

//       {/* Grille des projets */}
//       <Grid container spacing={4} sx={{ mt: 3 }}>
//         {projets.map((projet) => (
//           <Grid item xs={12} sm={6} md={4} key={projet.id}>
//             <Card sx={{ boxShadow: 3, height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={projet.image}
//                 alt={projet.title}
//               />
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                   {projet.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                   {projet.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ textTransform: 'none' }}
//                   onClick={() => alert(`Détails du projet : ${projet.title}`)}
//                 >
//                   Voir plus
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProjetsPage;






import  { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Modal } from '@mui/material';
import axios from 'axios';

const API_URL = 'http://localhost:5000';
const ProjetsPage = () => {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);





  
  const [showDetails, setShowDetails] = useState(false); // Contrôle de l'affichage des détails

  // Récupérer les projets depuis le backend
  useEffect(() => {
    const fetchProjects = async () => {
      console.log('Début de la récupération des projets...');
      try {
        const response = await axios.get(`${API_URL}/project/getfront`);
        console.log('Projets récupérés :', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error.response?.data || error.message);
      }
    };
    

    fetchProjects();
  }, []);

  // Ouvrir le modal avec les détails du projet


  // Fermer le modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };


  const handleShowDetails = (project) => {
    console.log('Projet sélectionné pour les détails :', project);
    setSelectedProject(project);
    console.log('État `selectedProject` mis à jour :', project);
    setShowDetails(true);
    console.log('État `showDetails` activé :', true);
  };
  
  
  

  const handleCloseDetails = () => {
    console.log('Fermeture de la boîte des détails.');
    setShowDetails(false);
    setSelectedProject(null);
    console.log('État réinitialisé : showDetails = false, selectedProject = null');
  };
  
    

  return (
    <Box sx={{ py: 5, px: 3, backgroundColor: '#f9f9f9' }}>
      {/* Titre principal */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#004080', textTransform: 'uppercase' }}
      >
        Grands Projets du Gouvernement
      </Typography>

      {/* Grille des projets */}
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {projects.map((projet) => (
          <Grid item xs={12} sm={6} md={4} key={projet.id}>
            <Card sx={{ boxShadow: 3, height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={`${API_URL}${projet.image}`} // Assurez-vous que le chemin de l'image est correct
                alt={projet.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {projet.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {projet.description}
                </Typography>
                <Button
  variant="contained"
  color="primary"
  sx={{ textTransform: 'none' }}
  onClick={() => handleShowDetails(projet)} // Utilisation de la fonction ici
>
  Voir plus
</Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal pour afficher les détails */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {selectedProject?.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {selectedProject?.details}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Box>
      </Modal>

      {showDetails && selectedProject && (
  <Box
    sx={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      zIndex: 1300,
    }}
  >
    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
      {selectedProject.title}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      {selectedProject.details?.text} {/* Rendre uniquement le texte des détails */}
    </Typography>
    <Button variant="outlined" color="secondary" onClick={handleCloseDetails}>
      Fermer
    </Button>
  </Box>
)}





    </Box>
  );
};

export default ProjetsPage;
