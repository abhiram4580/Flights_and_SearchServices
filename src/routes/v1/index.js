const express=require('express');
const CityController=require('../../controllers/city_controller');

const router=express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);

module.exports=router;