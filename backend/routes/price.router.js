const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const router = express();
router.use(cors());
router.use(express.json());

let priceSchema = require('../models/price')


router.get('/', (req,res)=>{
    priceSchema.find((err,data)=>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.send(data)
        }
    })
})


router.route('/Price_post').post((req , res , next)=>{
    priceSchema.create(req.body, (error,data) => {
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.status(200).json(data);
        }
    })
})


router.route('/sum').get((req,res)=>{
    priceSchema.aggregate([{$group:{sum:{$sum:'$price'},_id:'$date_at',}}],(err,data)=>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.send(data)
        }

    })
})


module.exports = router ;