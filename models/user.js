'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const User = sequelize.define(
  'user',
  {
    userId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;