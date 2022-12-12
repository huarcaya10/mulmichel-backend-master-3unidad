const express = require('express');
const productsRouter = require('./product.router');
const tipoProductsRouter = require('./tipoproduct.router');
const empleadosRouter = require('./empleado.router');
const ventasRouter = require('./venta.router');
const clientesRouter = require('./cliente.router');
const pagosRouter = require('./pago.router');
const detalleVentasRouter = require('./detalleventa.router');
function routerApi(app){
  const routerV1 = express.Router();
  app.use('/api/v1',routerV1);
  routerV1.use('/products',productsRouter);
  routerV1.use('/tipoproducts',tipoProductsRouter);
  routerV1.use('/empleados',empleadosRouter);
  routerV1.use('/ventas',ventasRouter);
  routerV1.use('/clientes',clientesRouter);
  routerV1.use('/pagos',pagosRouter);
  routerV1.use('/detalles',detalleVentasRouter);
}

module.exports = routerApi;
