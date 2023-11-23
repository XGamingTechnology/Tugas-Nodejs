'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fixes',{
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      // Add other columns as needed
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: Sequelize.ENUM('Super Admin', 'Admin', 'Anggota'),
        allowNull: false,
        defaultValue: 'Anggota',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('Active', 'Suspend'),
        allowNull: false,
      },
      avatar: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
      },
      createAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
      },
    })
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('fixes'); 
  }
};
