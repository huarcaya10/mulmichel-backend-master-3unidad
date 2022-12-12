const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');

class EmpleadosService{

    constructor(){
    }

    async create(data){
    const nuevoEmpleado = {
        id: crypto.randomUUID(),
        ...data
      };
      const salida = await models.Empleado.create(nuevoEmpleado);
      return salida;

    }

    async find(){
      const salida = await models.Empleado.findAll();
      return salida;
   }

  async findOne(id){
    const empleado = await models.Empleado.findByPk(id);
    if (!empleado){
        throw boom.notFound('empleado not found');
      }
    return empleado;
   }

   async update(id, changes){
    const empleado = await this.findOne(id);
    const salida = await empleado.update(changes);
    return salida;
   }
   async delete(id){
    const empleado = await this.findOne(id);
    await empleado.destroy();
    return {id};
   }
  }

  module.exports= EmpleadosService;
