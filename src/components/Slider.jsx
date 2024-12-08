

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import image1 from '../assets/niger.png';
// import image2 from '../assets/zene1.png';
// import image3 from '../assets/zene2.png';
// import image4 from '../assets/pm.png';

// const Slider = () => {
//   const slides = [
//     [
//       { src: image1, text: 'Niger, terre d’accueil' },
//       { src: image2, text: 'Richesses naturelles' },
//     ],
//     [
//       { src: image3, text: 'Zinder : patrimoine culturel' },
//       { src: image4, text: 'PM au travail' },
//     ],
//     [
//       { src: image2, text: 'Héritage culturel du Niger' },
//       { src: image1, text: 'Développement et modernité' },
//     ],
//   ];

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 5000 }}
//       loop
//       style={{ width: '100%', height: '500px' }}
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr', // Deux colonnes
//               gap: '10px', // Espacement entre les colonnes
//               height: '100%',
//               padding: '10px', // Espacement interne pour les cartes
//             }}
//           >
//             {slide.map((item, imgIndex) => (
//               <div
//                 key={imgIndex}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   backgroundColor: '#ffffff', // Couleur de fond de la carte
//                   borderRadius: '10px', // Coins arrondis
//                   overflow: 'hidden', // Empêche les débordements
//                   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ombre légère
//                   height: '100%', // Hauteur uniforme pour toutes les cartes
//                 }}
//               >
//                 {/* Image */}
//                 <div
//                   style={{
//                     flex: 1,
//                     backgroundImage: `url(${item.src})`,
//                     backgroundSize: 'contain', // Ajuste l'image sans déformation
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '300px', // Taille fixe pour les images
//                   }}
//                 ></div>

//                 {/* Bandeau blanc avec texte */}
//                 <div
//                   style={{
//                     backgroundColor: '#ffffff',
//                     padding: '10px',
//                     textAlign: 'center',
//                   }}
//                 >
//                   <p
//                     style={{
//                       margin: 0,
//                       fontSize: '16px',
//                       fontWeight: 'bold',
//                       color: '#004080',
//                     }}
//                   >
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slider;
//=====================================================

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Slider = () => {
//   const [sliders, setSliders] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchSliderData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/sliders/front');
//         console.log('Données récupérées pour les sliders :', response.data);
//         setSliders(response.data || []);
//       } catch (err) {
//         console.error('Erreur lors du chargement des sliders :', err);
//         setError('Impossible de charger les sliders');
//       }
//     };
//     fetchSliderData();
//   }, []);

//   if (error) {
//     return <p style={{ color: 'red' }}>{error}</p>;
//   }

//   if (!sliders || sliders.length === 0) {
//     return <p>Chargement des sliders...</p>;
//   }

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 5000 }}
//       loop
//       style={{ width: '100%', height: '500px' }}
//     >
//       {sliders.map((slider) => (
//         <SwiperSlide key={slider._id}>
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '10px',
//               height: '100%',
//               padding: '10px',
//             }}
//           >
//             {slider.slides[0]?.map((item, imgIndex) => (
//               <div
//                 key={imgIndex}
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   backgroundColor: '#ffffff',
//                   borderRadius: '10px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                   height: '100%',
//                 }}
//               >
//                 <div
//                   style={{
//                     flex: 1,
//                     backgroundImage: `url(http://localhost:5000/${item.src})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     height: '300px',
//                   }}
//                 ></div>
//                 <div
//                   style={{
//                     backgroundColor: '#ffffff',
//                     padding: '10px',
//                     textAlign: 'center',
//                   }}
//                 >
//                   <p
//                     style={{
//                       margin: 0,
//                       fontSize: '16px',
//                       fontWeight: 'bold',
//                       color: '#004080',
//                     }}
//                   >
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slider;





//================

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [error, setError] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Pour la gestion des petits écrans

  // Mise à jour de la largeur de l'écran lors du redimensionnement
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sliders/front');
        console.log('Données récupérées pour les sliders :', response.data);
        setSliders(response.data || []);
      } catch (err) {
        console.error('Erreur lors du chargement des sliders :', err);
        setError('Impossible de charger les sliders');
      }
    };
    fetchSliderData();
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!sliders || sliders.length === 0) {
    return <p>Chargement des sliders...</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      style={{ width: '100%', height: '500px' }}
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider._id}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: windowWidth < 600 ? '1fr' : '1fr 1fr', // Un seul slide pour les petits écrans
              gap: '10px',
              height: '100%',
              padding: '10px',
            }}
          >
            {slider.slides[0]?.map((item, imgIndex) => (
              <div
                key={imgIndex}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    backgroundImage: `url(http://localhost:5000/${item.src})`,
                    backgroundSize: windowWidth < 600 ? 'contain' : 'cover', // Pour les petits écrans, 'contain' permet de garder les proportions
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: windowWidth < 600 ? '200px' : '300px', // Réduit la hauteur pour les petits écrans
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: windowWidth < 600 ? '12px' : '16px', // Réduit la taille du texte pour les petits écrans
                      fontWeight: 'bold',
                      color: '#004080',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;

