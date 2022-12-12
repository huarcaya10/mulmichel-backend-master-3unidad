const Joi = require('joi');

const id = Joi.string()
              .uuid();
const tipoPago = Joi.string()
                   .min(3)
                   .max(15);
const createPagoSchema = Joi.object({
  tipoPago: tipoPago.required(),
});

const updatePagoSchema = Joi.object({
  tipoPago: tipoPago,
});

const getPagoSchema = Joi.object({
  id: id.required()
});

module.exports = {createPagoSchema, updatePagoSchema, getPagoSchema};


