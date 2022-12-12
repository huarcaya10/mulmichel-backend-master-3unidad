const express = require('express');
const router = express.Router();

const  validatorHandler =  require('../middlewares/validator.handler');
const {createTipoProductSchema,updateTipoProductSchema,getTipoProductSchema} = require('../schemas/tipoproduct.schema');

const TipoProductService = require('../services/tipoproduct.service')
const service = new TipoProductService();

router.get('/', async (req,res)=>{
  const tipoproducts = await service.find();
  res.status(200).json(tipoproducts);
});

router.get('/:id',
              validatorHandler(getTipoProductSchema,'params'),
              async (req,res, next)=>{
  try{
    const { id }= req.params;
    const tipoproduct = await service.findOne(id);
    res.status(200).json(tipoproduct);
  }catch(error){
    next(error);
  }
});

router.post('/',
             validatorHandler(createTipoProductSchema,'body'),
              async (req,res)=>{
  const body = req.body;
  const nuevoTipoProducto = await service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoTipoProducto
  });
})
router.patch('/:id',
                validatorHandler(getTipoProductSchema,'params'),
                validatorHandler(updateTipoProductSchema,'body'),
                async (req,res, next)=>{
  try{
    const {id} = req.params;
    const body = req.body;
    const tipoproduct = await service.update(id, body);
    res.status(200).json({
      message: 'actualizado',
      tipoproduct
    });
  }catch(error){
    next(error);
  }
});

router.delete('/:id',
                  validatorHandler(getTipoProductSchema,'params'),
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
