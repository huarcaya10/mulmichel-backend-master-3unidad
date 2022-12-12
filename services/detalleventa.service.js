const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');


class DetalleVentaService{

  constructor(){
  }
  async create(data){
    const nuevoDetalle = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.DetalleVenta.create(nuevoDetalle);
    return salida;
  }
  async find(){
    const salida = await models.DetalleVenta.findAll();
    return salida;
  }
  async findOne(id){
    const detalle = await models.DetalleVenta.findByPk(id);
    if (!detalle){
        throw boom.notFound('DetalleVenta not found');
      }
    return detalle;
  }
  async update(id, changes){
    const detalle = await this.findOne(id);
    const salida = await detalle.update(changes);
    return salida;
  }
  async delete(id){
    const detalle = await this.findOne(id);
    await detalle.destroy();
    return {id};
  }
}
module.exports = DetalleVentaService;
