// import  { useState } from 'react';
// import { AppBar, Toolbar,  Button, Box, Menu as MuiMenu, MenuItem } from '@mui/material';
// import { Link } from 'react-router-dom'; // Importation de Link
// import { useNavigate, useLocation  } from 'react-router-dom';

// import armorieNiger from '../assets/armoiries-niger.png';
// const MainMenu = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [submenu, setSubmenu] = useState(null);
//   const navigate = useNavigate(); // Call the hook and store the return value 
//   const location = useLocation();
//   const isHomePage = location.pathname === '/'; // Vérifie si c'est la page Home
//   const handleMenuOpen = (event, menu) => {
//     setAnchorEl(event.currentTarget);
//     setSubmenu(menu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSubmenu(null);
//   };

//   return (
//     <AppBar
//   position="sticky"
//   sx={{
//     color: '#000000',
//     backgroundColor: '#ffffff', // Remplacez par la couleur de votre choix
//     zIndex: 10, // Assure que le menu reste au-dessus des autres éléments
//   }}
// >

//     <Toolbar sx={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
//       {/* Logo à gauche en position absolue */}
     

//       <Box
//   sx={{
//     position: 'absolute',
//     backgroundColor: '#ffffff',
//     padding: '10px',
//     top: '5px',
//     left: '50px',
//     display: 'flex',
//     alignItems: 'center',
//     zIndex: 1,
//     cursor: 'pointer', // Rend l'image cliquable
//     boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow léger
//     border: '1px solid rgba(0, 0, 0, 0.05)', // Contour presque invisible
//     borderRadius: '8px', // Arrondir les coins
//   }}
//   onClick={() => navigate('/')} // Redirection vers la page Home
// >
//   <img
//     src={armorieNiger} // Remplacez par votre image réelle
//     alt="Armoirie"
//     style={{
//       width: isHomePage ? '100%' : '80px', // Taille différente selon la page
//       height: isHomePage ? '100%' : '80px',
//     }}
//   />
// </Box>


  
//       {/* Menu à droite */}
//       <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-end' }}>
//         {/* Menu Primature */}
//         <Button
//           color="inherit"
//           onClick={(event) => handleMenuOpen(event, 'primature')}
//         >
//           Primature
//         </Button>
//         <MuiMenu
//           anchorEl={anchorEl}
//           open={submenu === 'primature'}
//           onClose={handleMenuClose}
//         >
//   <MenuItem
//     component={Link}
//     to="/gouvernement" // Chemin vers la page des membres
//     onClick={handleMenuClose} // Ferme le menu après le clic
//   >
//     Gouvernement
//   </MenuItem>
//   <MenuItem
//   component={Link}
//   to="/biographie"
//   onClick={handleMenuClose}
// >
//   Biographie
// </MenuItem>

// <MenuItem
//   component={Link}
//   to="/cabinet"
//   onClick={handleMenuClose}
// >
//   Le Cabinet
// </MenuItem>

//           <MenuItem
//   component={Link}
//   to="/predecesseurs"
//   onClick={handleMenuClose}
// >
//   Prédécesseurs
// </MenuItem>

// <MenuItem
//   component={Link}
//   to="/services-rattaches"
//   onClick={handleMenuClose}
// >
//   Services Rattachés
// </MenuItem>

//           <MenuItem onClick={handleMenuClose}>Établissements sous tutelle</MenuItem>
//         </MuiMenu>
  
//         {/* Menu Institutions */}
//         <Button
//   color="inherit"
//   component={Link}
//   to="/institutions"
// >
//   Institutions
// </Button>

  
//         {/* Menu Actualités */}
//         <Button color="inherit" component={Link} to="/actualites">
//           Actualités
//         </Button>
  
//         {/* Menu Le Niger */}
//         <Button
//           color="inherit"
//           onClick={(event) => handleMenuOpen(event, 'niger')}
//         >
//           Le Niger
//         </Button>
//         <MuiMenu
//           anchorEl={anchorEl}
//           open={submenu === 'niger'}
//           onClose={handleMenuClose}
//         >
// <MenuItem
//   component={Link}
//   to="/niger-en-bref"
//   onClick={handleMenuClose}
// >
//   Le Niger en Bref
// </MenuItem>

// <MenuItem
//   component={Link}
//   to="/secteurs-opportunites"
//   onClick={handleMenuClose}
// >
//   Secteurs d'Opportunités
// </MenuItem>

//         </MuiMenu>
  
//         {/* Menu Services aux Usagers */}
//         <Button
//   color="inherit"
//   component={Link}
//   to="/services-usagers"
// >
//   Services aux Usagers
// </Button>

//       </Box>
//     </Toolbar>
//   </AppBar>
  
//   );
// };

// export default MainMenu;

//=========================================




// import React, { useState } from 'react';
// import { AppBar, Toolbar, Button, Box, Menu as MuiMenu, MenuItem } from '@mui/material';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import menuItems from './menuConfig'; // Importation de la configuration
// import armorieNiger from '../assets/armoiries-niger.png';

// const MainMenu = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [submenu, setSubmenu] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   const handleMenuOpen = (event, menu) => {
//     setAnchorEl(event.currentTarget);
//     setSubmenu(menu);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSubmenu(null);
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         color: '#000000',
//         backgroundColor: '#ffffff',
//         zIndex: 10,
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Logo */}
//         <Box
//           sx={{
//             position: 'absolute',
//             backgroundColor: '#ffffff',
//             padding: '10px',
//             top: '5px',
//             left: '50px',
//             cursor: 'pointer',
//             borderRadius: '8px',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//           onClick={() => navigate('/')}
//         >
//           <img
//             src={armorieNiger}
//             alt="Armoirie"
//             style={{
//               width: isHomePage ? '100%' : '80px',
//               height: isHomePage ? '100%' : '80px',
//             }}
//           />
//         </Box>

//         {/* Menu Items */}
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
//           {menuItems.map((menu) =>
//             menu.submenu ? (
//               <React.Fragment key={menu.label}>
//                 <Button
//                   color="inherit"
//                   onClick={(event) => handleMenuOpen(event, menu.label)}
//                 >
//                   {menu.label}
//                 </Button>
//                 <MuiMenu
//                   anchorEl={anchorEl}
//                   open={submenu === menu.label}
//                   onClose={handleMenuClose}
//                 >
//                   {menu.submenu.map((item) => (
//                     <MenuItem
//                       key={item.path}
//                       component={Link}
//                       to={item.path}
//                       onClick={handleMenuClose}
//                     >
//                       {item.label}
//                     </MenuItem>
//                   ))}
//                 </MuiMenu>
//               </React.Fragment>
//             ) : (
//               <Button
//                 key={menu.label}
//                 color="inherit"
//                 component={Link}
//                 to={menu.path}
//               >
//                 {menu.label}
//               </Button>
//             )
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default MainMenu;



import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Menu as MuiMenu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import menuItems from './menuConfig'; // Importation de la configuration
import armorieNiger from '../assets/armoiries-niger.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MainMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenu, setSubmenu] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);  // Drawer state
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenu(null);
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);  // Toggle Drawer visibility
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#004080', // Darker background for AppBar for contrast
        zIndex: 1300, // Ensures AppBar is above Drawer
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow effect
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Box
          sx={{
            position: 'absolute',
            top: '5px',
            left: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={() => navigate('/')}
        >
          <img
            src={armorieNiger}
            alt="Armoirie"
            style={{
              width: isHomePage ? '100%' : '80px',
              height: isHomePage ? '100%' : '80px',
            }}
          />
        </Box>

        {/* Menu Items (for larger screens) */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
          {/* Desktop/Tablet Menu (flex display) */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            {menuItems.map((menu) =>
              menu.submenu ? (
                <React.Fragment key={menu.label}>
                  <Button
                    color="inherit"
                    onClick={(event) => handleMenuOpen(event, menu.label)}
                    sx={{ '&:hover': { backgroundColor: '#003366', color: '#fff' } }}  // Dark hover effect
                  >
                    {menu.label}
                  </Button>
                  <MuiMenu
                    anchorEl={anchorEl}
                    open={submenu === menu.label}
                    onClose={handleMenuClose}
                    PaperProps={{ style: { maxHeight: 200 } }}
                  >
                    {menu.submenu.map((item) => (
                      <MenuItem
                        key={item.path}
                        component={Link}
                        to={item.path}
                        onClick={handleMenuClose}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MuiMenu>
                </React.Fragment>
              ) : (
                <Button
                  key={menu.label}
                  color="inherit"
                  component={Link}
                  to={menu.path}
                  sx={{ '&:hover': { backgroundColor: '#003366', color: '#fff' } }}
                >
                  {menu.label}
                </Button>
              )
            )}
          </Box>

          {/* Hamburger Icon for mobile */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'block', sm: 'none' } }}  // Show only on small screens
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          zIndex: 1200, // Ensures Drawer is below AppBar
          backgroundColor: '#ffffff', // White background for Drawer
        }}
      >
        <Box sx={{ width: 250, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Close button for Drawer */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#004080' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ paddingTop: 0 }}>
            {menuItems.map((menu) =>
              menu.submenu ? (
                <React.Fragment key={menu.label}>
                  <ListItem button onClick={(event) => handleMenuOpen(event, menu.label)}>
                    <ListItemText primary={menu.label} />
                  </ListItem>
                  <MuiMenu
                    anchorEl={anchorEl}
                    open={submenu === menu.label}
                    onClose={handleMenuClose}
                    PaperProps={{ style: { maxHeight: 200 } }}
                  >
                    {menu.submenu.map((item) => (
                      <MenuItem
                        key={item.path}
                        component={Link}
                        to={item.path}
                        onClick={handleMenuClose}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </MuiMenu>
                </React.Fragment>
              ) : (
                <ListItem button key={menu.label} component={Link} to={menu.path} onClick={handleMenuClose}>
                  <ListItemText primary={menu.label} />
                </ListItem>
              )
            )}
          </List>

          {/* Divider for clean separation */}
          <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

          {/* Optionally, you can add more sections, such as contact or language */}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default MainMenu;
