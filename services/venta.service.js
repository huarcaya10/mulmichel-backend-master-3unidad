const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');

class VentaService{

  constructor(){
  }
  async create(data){
    const nuevoVenta = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.Venta.create(nuevoVenta);
    return salida;
  }
  async find(){
    const salida = await models.Venta.findAll();
    return salida;
  }
  async findOne(id){
    const venta = await models.Venta.findByPk(id);
    if (!venta){
        throw boom.notFound('Sale not found');
      }
    return venta;
  }
  async update(id, changes){
    const venta = await this.findOne(id);
    const salida = await venta.update(changes);
    return salida;
  }
  async delete(id){
    const venta = await this.findOne(id);
    await venta.destroy();
    return {id};
  }
}
module.exports = VentaService;
