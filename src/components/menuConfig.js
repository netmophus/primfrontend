// menuConfig.js
const menuItems = [
  {
    label: 'Primature',
    submenu: [
      { label: 'Gouvernement', path: '/gouvernement' },
      { label: 'Biographie', path: '/biographie' },
      { label: 'Le Cabinet', path: '/cabinet' },
      { label: 'Prédécesseurs', path: '/predecesseurs' },
      { label: 'Services Rattachés', path: '/services-rattaches' },
    ],
  },
  {
    label: 'Le Niger',
    submenu: [
      { label: 'Le Niger en Bref', path: '/niger-en-bref' },
      { label: 'Secteurs d\'Opportunités', path: '/secteurs-opportunites' },
    ],
  },
  { label: 'Institutions', path: '/institutions' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Services aux Usagers', path: '/services-usagers' },
];

export default menuItems;
