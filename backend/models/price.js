const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let priceSchema = new Schema({
    nameprice:{
        type:String
    },
    price:{
        type:Number
    }
},{
    collection:'prices'
})


module.exports = mongoose.model('prices', priceSchema)