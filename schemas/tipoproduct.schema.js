const Joi = require('joi');

const id = Joi.string()
              .uuid();
const nombre = Joi.string()//.alphanum()
                  .min(3)
                  .max(30);

const createTipoProductSchema = Joi.object({
  nombre : nombre.required()
});
const updateTipoProductSchema = Joi.object({
  nombre : nombre
});
const getTipoProductSchema = Joi.object({
  id : id.required()
});

module.exports = {createTipoProductSchema,updateTipoProductSchema,getTipoProductSchema,}
