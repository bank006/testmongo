let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbconfig = require('./database/db')


const userRouter = require('../backend/routes/user.router');
const priceRouter = require('../backend/routes/price.router');




mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.db,{
    useNewUrlParser: true,
}).then(()=>{
    console.log("database success");
},
(err)=>{
    console.log(err);
}
)


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use((cors()));
app.use('/users', userRouter);
app.use('/prices', priceRouter)

const port = process.env.PORT || 4000;
const server = app.listen(port,()=>{
    console.log('connecting port'+ port)
})


// app.use((req,res,next)=>{
//      next((createError(404)))
//  })

//  app.use(function(err,res,req,next){
//      console.error(err.message);
//      if(!err.statusCode)err.statusCode = 500;

//      res.status(err.statusCode).json({
//          message:err.message
//      })
    
//  })

