const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');

class PagosService{

  constructor(){
  }
  async create(data){
    const nuevoPago = {
      id: crypto.randomUUID(),
      ...data
    };
    const salida = await models.Pago.create(nuevoPago);
    return salida;
  }
  async find(){
    const salida = await models.Pago.findAll();
    return salida;
  }
  async findOne(id){
    const pago = await models.Pago.findByPk(id);
    if (!pago){
        throw boom.notFound('Pago not found');
      }
    return pago;
  }
  async update(id, changes){
    const pago = await this.findOne(id);
    const salida = await pago.update(changes);
    return salida;
  }
  async delete(id){
    const pago = await this.findOne(id);
    await pago.destroy();
    return {id};
  }
}
module.exports = PagosService;

