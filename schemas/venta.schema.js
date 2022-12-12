const Joi = require('joi');

const id = Joi.string()
              .uuid();
const pertenecepago = Joi.string()
              .uuid();
const pertenececliente = Joi.string()
              .uuid();
const fechaVenta = Joi.date();
const fechaEntrega = Joi.date();
const costoTotal = Joi.number()
                  .integer()
                  .min(10);
const delivery = Joi.string()
                  .min(3)
                  .max(30);
const estadoPago = Joi.boolean();
const fechaPago = Joi.string();
const montoPago = Joi.number()
                     .integer()
                     .min(10);

const createVentaSchema = Joi.object({
  fechaVenta : fechaVenta.required(),
  fechaEntrega: fechaEntrega.required(),
  costoTotal: costoTotal.required(),
  delivery: delivery.required(),
  estadoPago:estadoPago.required(),
  fechaPago: fechaPago.required(),
  montoPago: montoPago.required(),
  pertenecepago: pertenecepago.required(),
  pertenececliente: pertenececliente.required()
});
const updateVentatSchema = Joi.object({
  fechaVenta : fechaVenta,
  fechaEntrega: fechaEntrega,
  costoTotal: costoTotal,
  delivery: delivery,
  estadoPago:estadoPago,
  fechaPago: fechaPago,
  montoPago: montoPago,
  pertenecepago: pertenecepago,
  pertenececliente: pertenececliente
});
const getVentaSchema = Joi.object({
  id : id.required()
});

module.exports = {createVentaSchema,updateVentatSchema,getVentaSchema,}
