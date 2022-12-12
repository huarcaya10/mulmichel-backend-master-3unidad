const {Model, DataTypes, Sequelize} = require('sequelize');

const DETALLEVENTA_TABLE = 'detalleventas';
const DetalleventaSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class DetalleVenta extends Model{
  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: {
        name: 'perteneceproduct'
      }
    });
    this.belongsTo(models.Venta,{
      foreignKey:{
        name: 'perteneceventa'
      }
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: DETALLEVENTA_TABLE,
      modelName: 'DetalleVenta',
      timestamps: false
    }
  }
}

module.exports = {DETALLEVENTA_TABLE, DetalleventaSchema, DetalleVenta};
