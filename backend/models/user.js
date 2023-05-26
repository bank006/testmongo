const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    rollno:{
        type:Number
    }
},{
    collation: "users"
})

module.exports = mongoose.model('users',userSchema);
