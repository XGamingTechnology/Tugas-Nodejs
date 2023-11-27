'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users',{
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // allowNull:false,
        // autoIncrement:true,
        // primaryKey: true,
        // type: Sequelize.INTEGER
        // type: Sequelize.UUID,
        // defaultValue: UUIDV4,
        // primaryKey: true,
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
        type: Sequelize.INTEGER, 
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.INTEGER, 
        allowNull: true,
      },
    })
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users'); 
  }
};
