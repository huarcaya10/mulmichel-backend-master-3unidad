const Joi = require('joi');

const id = Joi.string()
              .uuid();
const pertenecetipoproduct = Joi.string()
              .uuid();
const perteneceempleado = Joi.string()
              .uuid();
const nombre = Joi.string()//.alphanum()
                  .min(3)
                  .max(30);
const precio = Joi.number()
                  .integer()
                  .min(10);

const createProductSchema = Joi.object({
  nombre : nombre.required(),
  precio: precio.required(),
  pertenecetipoproduct: pertenecetipoproduct.required(),
  perteneceempleado: perteneceempleado.required()
});
const updateProductSchema = Joi.object({
  nombre : nombre,
  precio: precio,
  pertenecetipoproduct: pertenecetipoproduct,
  perteneceempleado: perteneceempleado
});
const getProductSchema = Joi.object({
  id : id.required()
});

module.exports = {createProductSchema,updateProductSchema,getProductSchema,}
