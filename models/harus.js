'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class harus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  harus.init({
    id: {
      type: DataTypes.UUID,
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
  }, {
    sequelize,
    paranoid: true,
    modelName: 'harus',
  });
  return harus;
};