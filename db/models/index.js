const {ProductSchema, Product} = require('./product.model');
const {TipoProductSchema, TipoProduct} = require('./tipoproduct.model');
const {VentaSchema, Venta} = require('./venta.model');
const {DetalleventaSchema, DetalleVenta} = require('./detalleventa.model');
const {PagoSchema, Pago} = require('./pago.model');
const {ClienteSchema, Cliente} = require('./cliente.model');
const {EmpleadoSchema, Empleado} = require('./empleado.model');


function setupModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
  TipoProduct.init(TipoProductSchema, TipoProduct.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  DetalleVenta.init(DetalleventaSchema, DetalleVenta.config(sequelize));
  Pago.init(PagoSchema, Pago.config(sequelize));
  Cliente.init(ClienteSchema, Cliente.config(sequelize));
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));


  Product.associate(sequelize.models);
  TipoProduct.associate(sequelize.models);
  Pago.associate(sequelize.models);
  Cliente.associate(sequelize.models);
  Empleado.associate(sequelize.models);
  Venta.associate(sequelize.models);
  DetalleVenta.associate(sequelize.models);

}
 module.exports = setupModels;
