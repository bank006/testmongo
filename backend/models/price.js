const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let priceSchema = new Schema({
    
    price:{
        type:Number
    },
    date_at:{
        type:String

    }
},{
    collection:'prices'
})


module.exports = mongoose.model('prices', priceSchema);