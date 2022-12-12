const crypto = require('crypto');
const boom = require('@hapi/boom')
const {models} =  require('./../libs/sequelize');


class clientesService{
    constructor(){
    }

    async create(data){
        const nuevocliente = {
            id: crypto.randomUUID(),
            ...data
          };
          const salida = await models.Cliente.create(nuevocliente);
          return salida;


        }

    async find(){
      const salida = await models.Cliente.findAll();
      return salida;
       }

    async findOne(id){
      const cliente = await models.Cliente.findByPk(id);
      if (!cliente){
          throw boom.notFound('cliente not found');
        }
      return cliente;
      }


    async update(id, changes){
      const cliente = await this.findOne(id);
      const salida = await cliente.update(changes);
      return salida;
   }
   async delete(id){
    const cliente = await this.findOne(id);
    await cliente.destroy();
    return {id};
}
}
module.exports=clientesService;
