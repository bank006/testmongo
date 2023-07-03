const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const router = express();
router.use(cors());
router.use(express.json());

let priceSchema = require('../models/price');
const price = require('../models/price');


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


// router.route('/sum').get((req,res)=>{
//     priceSchema.aggregate([{$group:{price:{$sum:('$price')},_id:'$date_at'}}],(err,data)=>{
//         if(err){
//             return next(err)
//         }else{
//             console.log(data)
//             res.send(data)
//         }

//     })
// })


router.route('/sum/').get((req,res)=>{
    priceSchema.aggregate([{$group:{_id:'$date_at','totalprice':{$sum:'$price'}}}],(err,data)=>{
         if(err){
             return next(err)
         }else{
             console.log(data)
             res.send(data)
         }

     })
 })


router.get("/search/:id", async(req,res)=>{
    const pd = req.params.id
    console.log (pd)
    // let data = await priceSchema.aggregate([{$match:{date_at:(req.params.key)}}])
    let data = await priceSchema.aggregate([{$match:{date_at:(req.params.id)}},{$group:{_id: '$date_at','totalprice':{$sum:'$price'}}}])
    res.status(200).json(data)  
})


//fechdata detail of price 

router.get("/fechdetail/:id", async(req , res)=>{
    const id =  req.params.id;
    let response = await priceSchema.aggregate([{$match:{date_at:`${id}`}}, {$project:{price:'$price',date_at:'$date_at'}}])
    res.status(200).json(response)
})

// router.get("/search/:key", async(req,res)=>{
//     console.log (req.params.key)
//     let data = await priceSchema.find([{$group:{price:{$sum:('$price')},date_at:{$regex:(req.params.key)}}}])
// })


// router.get("/User_edit/:date_at", async(req,res)=>{
//     console.log (req.params.date_at)
//     let data = await priceSchema.find({
//         "$or":[
//             {"date_at":{$regex:(req.params.date_at)}}
            

//         ]
//     },{price:'$price',date_at2:'$date_at'})
//     res.status(200).json(data);
// })




// router.get("/search/:key", async(req,res)=>{
//     console.log (req.params.key)
//     let data = await priceSchema.find([{$group:{price:{$sum:('$price')},date_at:{$regex:(req.params.key)}}}])
//     res.send(data)
// })



// router.route('/sum').get((req,res)=>{
//     priceSchema.find((err,data)=>{
//         if(err){
//             return next(err)
//         }else{
//             console.log(data)
//             res.send(data)
//         }
//     })
// })


module.exports = router ;