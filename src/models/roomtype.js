'use strict';
const {
  Model,
  Sequelize,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Room, Price, Image }) {
      // define association here
      this.hasMany(Room, { foreignKey: "idRoomType", as: "rooms" });
      this.hasMany(Price, { foreignKey: "idRoomType", as: "prices" });
      this.hasMany(Image, { foreignKey: "idRoomType", as: "images" });
    }
  };
  RoomType.init({
    id: {
      allowNull: false,
      unique: true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfBed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    numberOfPerson: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
    },
    dailyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    overnightRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    monthlyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    groupRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    familyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    overGuestNumberRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    hourlyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    thumb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    square:{
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'RoomType',
    tableName: "room_type"
  });
  return RoomType;
};