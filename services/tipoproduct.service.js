const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('../libs/sequelize');
const { Product } = require('../db/models/product.model');

class TipoProductService{

  constructor(){
  }
  async create(data){
    const nuevoTipoProducto = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.TipoProduct.create(nuevoTipoProducto);
    return salida;
  }
  async find(){
    const salida = await models.TipoProduct.findAll();
    return salida;
  }
  async findOne(id){
    const tipoproducto = await models.TipoProduct.findByPk(id, {include: Product}); //,{include: Product} EAGERLODIN
    if (!tipoproducto){
        throw boom.notFound('TipoProduct not found');
      }
    return tipoproducto;
  }
  async update(id, changes){
    const tipoproducto = await this.findOne(id);
    const salida = await tipoproducto.update(changes);
    return salida;
  }
  async delete(id){
    const tipoproducto = await this.findOne(id);
    await tipoproducto.destroy();
    return {id};
  }
}
module.exports = TipoProductService;
