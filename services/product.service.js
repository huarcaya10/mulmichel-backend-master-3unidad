const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');
const { TipoProduct } = require('../db/models/tipoproduct.model');

class ProductService{

  constructor(){
  }
  async create(data){
    const nuevoProducto = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.Product.create(nuevoProducto);
    return salida;
  }
  async find(){
    const salida = await models.Product.findAll({include: TipoProduct});
    return salida;
  }
  async findOne(id){
    const producto = await models.Product.findByPk(id);
    if (!producto){
        throw boom.notFound('Product not found');
      }
    return producto;
  }
  async update(id, changes){
    const producto = await this.findOne(id);
    const salida = await producto.update(changes);
    return salida;
  }
  async delete(id){
    const producto = await this.findOne(id);
    await producto.destroy();
    return {id};
  }
}
module.exports = ProductService;
