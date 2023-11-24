'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fix.init({
    id: {
      allowNull:false,
      autoIncrement:true,
      primaryKey: true,
      type: Sequelize.INTEGER
      // type: Sequelize.UUID,
      // defaultValue: DataTypes.UUIDV4,
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
  }, {
    sequelize,
    paranoid: true,
    modelName: 'fix',
  });
  return fix;
};