// // import React from 'react';
// // import RedBanner from './components/RedBanner';
// // import InfoBanner from './components/InfoBanner';
// // import MainMenu from './components/MainMenu';
// // import Slider from './components/Slider';

// // const App = () => {
// //   return (
// //     <div>
// //       {/* Bandeau rouge */}
// //       <RedBanner />

// //       {/* Bandeau institutionnel */}
// //       <InfoBanner />

// //       {/* Menu de navigation */}
// //       <MainMenu />

// //       {/* Slider */}
// //       <Slider />

// //       {/* Contenu principal */}
// //       <main style={{ padding: '20px', textAlign: 'center' }}>
// //         <h1>Bienvenue sur le site officiel</h1>
// //         <p>
// //           Ce site présente les activités de la Primature et offre un accès aux discours, 
// //           actualités, et autres informations importantes.
// //         </p>
// //       </main>
// //     </div>
// //   );
// // };

// // export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import RedBanner from './components/RedBanner';
// import InfoBanner from './components/InfoBanner';
// import MainMenu from './components/MainMenu';
// import Slider from './components/Slider';
// import Actualites from './pages/Actualites';
// import MediaPage from './pages/MediaPage';
// import TabsPage from './components/TabsPage';
// import ProjetsPage from './pages/ProjetsPage';
// import Footer from './components/Footer';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Bandeaux et Menu */}
//         <RedBanner />
//         <InfoBanner />
//         <MainMenu />
//         <Slider />
//         <TabsPage />
//         <MediaPage />
//         <ProjetsPage />
//         <Footer />

//         {/* Routes */}
//         <Routes>     
//           <Route path="/actualites" element={<Actualites />} />
//         </Routes>
//          {/* Audiences */}
        
      
//       </div>
//     </Router>

//   );
// };

// export default App;




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedBanner from './components/RedBanner';
import InfoBanner from './components/InfoBanner';
import MainMenu from './components/MainMenu';
import Slider from './components/Slider';
import Actualites from './pages/Actualites';
import MediaPage from './pages/MediaPage';
import TabsPage from './components/TabsPage';
import ProjetsPage from './pages/ProjetsPage';
import Footer from './components/Footer';
import MembresGouvernement from './pages/MembresGouvernement';
import BiographiePage from './pages/BiographiePage';
import PredecesseursPage from './pages/PredecesseursPage';
import CabinetPage from './pages/CabinetPage';
import ServicesRattachesPage from './pages/ServicesRattachesPage';
import NigerRegionsPage from './pages/NigerRegionsPage';
import SecteursPage from './pages/SecteursPage';
import ServicesUsagersPage from './pages/ServicesUsagersPage';
import InstitutionsPage from './pages/InstitutionsPage';
const App = () => {
  return (
    <Router>
      <div>
        {/* Bandeaux et Menu toujours visibles */}
        <RedBanner />
        <InfoBanner />
        <MainMenu />

        {/* Routes pour le contenu */}
        <Routes>
          {/* Page d'accueil : Tout est affiché */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <TabsPage />
                <MediaPage />
                <ProjetsPage />
              </>
            }
          />
          {/* Autres routes : Contenu spécifique */}
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/gouvernement" element={<MembresGouvernement />} />
          <Route path="/biographie" element={<BiographiePage />} />
          <Route path="/predecesseurs" element={<PredecesseursPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/services-rattaches" element={<ServicesRattachesPage />} />
          <Route path="/niger-en-bref" element={<NigerRegionsPage />} />
          <Route path="/secteurs-opportunites" element={<SecteursPage />} />
          <Route path="/services-usagers" element={<ServicesUsagersPage />} />
          <Route path="/institutions" element={<InstitutionsPage />} />
        </Routes>

        {/* Footer toujours visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
