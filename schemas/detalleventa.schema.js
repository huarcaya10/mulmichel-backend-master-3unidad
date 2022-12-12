const Joi = require('joi');

const id = Joi.string()
              .uuid();
const perteneceproduct = Joi.string()
              .uuid();
const perteneceventa = Joi.string()
              .uuid();
const cantidad =Joi.number()
                  .integer()
                  .min(10);


const createDetalleSchema = Joi.object({
  cantidad : cantidad.required(),
  perteneceventa: perteneceventa.required(),
  perteneceproduct: perteneceproduct.required()
});
const updateDetalleSchema = Joi.object({
  cantidad : cantidad,
  perteneceventa: perteneceventa,
  perteneceproduct: perteneceproduct
});
const getDetalleSchema = Joi.object({
  id : id.required()
});

module.exports = {createDetalleSchema,updateDetalleSchema,getDetalleSchema}
