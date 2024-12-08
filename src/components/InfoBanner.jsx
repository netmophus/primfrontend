

// import { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   IconButton,
//   Button,
//   Modal,
//   TextField,
//   Stack,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import axios from 'axios';
// import hymneNationale from '../assets/hymme.mp4';

// const InfoBanner = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [openModal, setOpenModal] = useState(false);
//   const [phoneNumbers, setPhoneNumbers] = useState([]);
//   const [address, setAddress] = useState('');

//   const open = Boolean(anchorEl);

//   useEffect(() => {
//     const fetchInfo = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/inforedbanner/public/front');
//         setPhoneNumbers(response.data.phoneNumbers);
//         setAddress(response.data.address);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des informations :', error);
//       }
//     };
//     fetchInfo();
//   }, []);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#f5f5f5',
//         py: 1,
//         px: 2,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//         borderBottom: '1px solid #ddd',
//       }}
//     >
//       {/* Lecteur audio */}
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <audio controls>
//           <source src={hymneNationale} type="audio/mpeg" />
//           Votre navigateur ne supporte pas l'élément audio.
//         </audio>
//         <IconButton onClick={handleMenuClick} sx={{ color: 'gray', ml: 1 }}>
//           <MoreVertIcon />
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleMenuClose}
//           PaperProps={{ style: { maxHeight: 200 } }}
//         >
//           <MenuItem onClick={handleMenuClose}>
//             <a
//               href={hymneNationale}
//               download
//               style={{ textDecoration: 'none', color: 'inherit' }}
//             >
//               Télécharger l'Hymne National
//             </a>
//           </MenuItem>
//         </Menu>
//       </Box>

//       {/* Téléphone */}
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <PhoneIcon sx={{ fontSize: 40, color: '#004080', mr: 1 }} />
//         <Typography variant="body1" color="textSecondary">
//           {phoneNumbers.map((number, index) => (
//             <span key={index}>
//               {number}
//               {index < phoneNumbers.length - 1 && <br />}
//             </span>
//           ))}
//         </Typography>
//       </Box>

//       {/* Géolocalisation */}
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <LocationOnIcon sx={{ fontSize: 40, color: '#004080', mr: 1 }} />
//         <Typography variant="body1" color="textSecondary">
//           {address}
//         </Typography>
//       </Box>

//       {/* Bouton de contact */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => setOpenModal(true)}
//       >
//         Contacter le PM
//       </Button>

//       {/* Modal de contact */}
//       <Modal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: 'white',
//             borderRadius: 2,
//             p: 4,
//             boxShadow: 24,
//             width: 400,
//           }}
//         >
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Laissez un message au PM
//           </Typography>
//           <Stack spacing={2}>
//             <TextField label="Votre nom" variant="outlined" fullWidth />
//             <TextField label="Votre email" variant="outlined" fullWidth />
//             <TextField
//               label="Votre message"
//               variant="outlined"
//               multiline
//               rows={4}
//               fullWidth
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => setOpenModal(false)}
//             >
//               Envoyer
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default InfoBanner;



import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Modal,
  TextField,
  Stack,
  Menu,
  MenuItem,
  Grid,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import hymneNationale from '../assets/hymme.mp4';

const InfoBanner = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [address, setAddress] = useState('');

  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get('http://localhost:5000/inforedbanner/public/front');
        setPhoneNumbers(response.data.phoneNumbers);
        setAddress(response.data.address);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations :', error);
      }
    };
    fetchInfo();
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 1,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ddd',
        flexWrap: 'wrap',
      }}
    >
      {/* Lecteur audio */}
      <Grid container spacing={2} alignItems="center" sx={{ flex: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <audio controls>
              <source src={hymneNationale} type="audio/mpeg" />
              Votre navigateur ne supporte pas l'élément audio.
            </audio>
            <IconButton onClick={handleMenuClick} sx={{ color: 'gray', ml: 1 }}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{ style: { maxHeight: 200 } }}
            >
              <MenuItem onClick={handleMenuClose}>
                <a
                  href={hymneNationale}
                  download
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Télécharger l'Hymne National
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>

        {/* Téléphone */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneIcon sx={{ fontSize: 40, color: '#004080', mr: 1 }} />
            <Typography variant="body1" color="textSecondary">
              {phoneNumbers.map((number, index) => (
                <span key={index}>
                  {number}
                  {index < phoneNumbers.length - 1 && <br />}
                </span>
              ))}
            </Typography>
          </Box>
        </Grid>

        {/* Géolocalisation */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ fontSize: 40, color: '#004080', mr: 1 }} />
            <Typography variant="body1" color="textSecondary">
              {address}
            </Typography>
          </Box>
        </Grid>

        {/* Bouton de contact */}
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setOpenModal(true)}
          >
            Contacter le PM
          </Button>
        </Grid>
      </Grid>

      {/* Modal de contact */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            p: 4,
            boxShadow: 24,
            width: { xs: '80%', sm: '60%', md: '40%' },
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Laissez un message au PM
          </Typography>
          <Stack spacing={2}>
            <TextField label="Votre nom" variant="outlined" fullWidth />
            <TextField label="Votre email" variant="outlined" fullWidth />
            <TextField
              label="Votre message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenModal(false)}
            >
              Envoyer
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default InfoBanner;
