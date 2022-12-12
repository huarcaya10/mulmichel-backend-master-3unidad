const {Model, DataTypes, Sequelize} = require('sequelize');

const EMPLEADO_TABLE = 'empleados';
const EmpleadoSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
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
  correo:{
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

class Empleado extends Model{
  static associate(models) {
    this.hasMany(models.Product,{
      foreignKey: {
        name: 'perteneceempleado'
      }
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: EMPLEADO_TABLE,
      modelName: 'Empleado',
      timestamps: false
    }
  }
}

module.exports = {EMPLEADO_TABLE, EmpleadoSchema, Empleado};
