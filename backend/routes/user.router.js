let mongoose = require('mongoose'),
        express = require('express'),
        router = express.Router();


let userSchema = require('../models/user')


router.route('/User_create').post((req , res , next)=>{
    userSchema.create(req.body, (error,data) => {
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

router.get('/', (req,res)=>{
     userSchema.find((error , data)=>{
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    })
});


router.route('/User_edit/:id').get((req,res)=>{
    
    userSchema.findById(req.params.id , (error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

router.route('/count').get((req,res)=>{
    userSchema.count((error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})


router.route('/deleteUser/:id').delete((req,res,next)=>{
    userSchema.findByIdAndRemove(req.params.id,(error, data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg: data 
            })
        }
    })
})



module.exports = router ;
