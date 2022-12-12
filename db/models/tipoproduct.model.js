const {Model, DataTypes, Sequelize} = require('sequelize');

const TIPOPRODUCT_TABLE = 'tipoproducts';
const TipoProductSchema = {
  id:{
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre:{
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

class TipoProduct extends Model{
  static associate(models) {
    // this.hasOne(models.Product,{
    //   foreignKey: {
    //     name: 'pertenecetipoproduct'
    //   }
    // });
    // this.belongsToMany(models.Product,{
    //   through: 'product_tipoproduct'
    // });
    this.hasMany(models.Product,{
      foreignKey: {
        name: 'pertenecetipoproduct'
      }
    });
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: TIPOPRODUCT_TABLE,
      modelName: 'TipoProduct',
      timestamps: false
    }
  }
}

module.exports = {TIPOPRODUCT_TABLE, TipoProductSchema, TipoProduct};
