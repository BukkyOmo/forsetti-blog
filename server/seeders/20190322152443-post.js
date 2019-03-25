/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Posts', [
    {
      id: '0be24c67-7eaf-4f44-b1ff-faf7a8289816',
      title: 'The First Bane',
      body: 'This is the story of the first bane',
    },
    {
      id: '1862d707-6afd-442e-a72e-267cf15d84da',
      title: 'The Second bane',
      body: 'This is the story of the second bane',
    },
    {
      id: 'a7201c6a-b026-4117-932a-852f6b5c0a4f',
      title: 'The Third bane',
      body: 'This is the story of the very final bane',
    },
    {
      id: '1862d707-6afd-442e-a72e-267cf15d84db',
      title: 'The fourth bane',
      body: 'This is the story of the fourth bane',
    },
    {
      id: '1862d707-6afd-442e-a72e-267cf15d84dc',
      title: 'The fifth bane',
      body: 'This is the story of the fifth bane',
    }], {}),


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Posts', null, {}),
};
