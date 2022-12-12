const express = require('express');
const router = express.Router();

const  validatorHandler =  require('../middlewares/validator.handler');
const {createDetalleSchema,updateDetalleSchema,getDetalleSchema} = require('../schemas/detalleventa.schema');

const DetalleVentaService = require('../services/detalleventa.service')
const service = new DetalleVentaService();

router.get('/', async (req,res)=>{
  const detalles = await service.find();
  res.status(200).json(detalles);
});

router.get('/:id',
              validatorHandler(getDetalleSchema,'params'),
              async (req,res, next)=>{
  try{
    const { id }= req.params;
    const detalle = await service.findOne(id);
    res.status(200).json(detalle);
  }catch(error){
    next(error);
  }
});

router.post('/',
             validatorHandler(createDetalleSchema,'body'),
              async (req,res)=>{
  const body = req.body;
  const nuevoDetalle = await service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoDetalle
  });
})
router.patch('/:id',
                validatorHandler(getDetalleSchema,'params'),
                validatorHandler(updateDetalleSchema,'body'),
                async (req,res, next)=>{
  try{
    const {id} = req.params;
    const body = req.body;
    const detalle = await service.update(id, body);
    res.status(200).json({
      message: 'actualizado',
      detalle
    });
  }catch(error){
    next(error);
  }
});

router.delete('/:id',
                  validatorHandler(getDetalleSchema,'params'),
                  async (req,res, next)=>{
  try{
    const {id} = req.params;
    const rta = await service.delete(id);
    res.json({
      message: 'eliminado',
      rta
    });
  }catch(error){
    next(error);
  }
});

module.exports = router;
