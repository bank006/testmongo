let mongoose = require('mongoose'),
        express = require('express'),
        router = express.Router();


let priceSchema = require('../models/price')


router.get('/', (req,res)=>[
    priceSchema.find((err,data)=>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.json(data);
        }
    })
])


module.exports = router ;