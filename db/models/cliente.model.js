const {Model, DataTypes, Sequelize} = require('sequelize');

const CLIENTE_TABLE = 'clientes';
const ClienteSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  razonSocial:{
    allowNull: false,
    type: DataTypes.STRING
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido:{
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING
  },
  dni:{
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Cliente extends Model{
  static associate(models) {
    this.hasMany(models.Venta,{
      foreignKey: {
        name: 'pertenececliente'
      }
    });

  }
  static config(sequelize){
    return{
      sequelize,
      tableName: CLIENTE_TABLE,
      modelName: 'Cliente',
      timestamps: false
    }
  }
}

module.exports = {CLIENTE_TABLE, ClienteSchema, Cliente};
