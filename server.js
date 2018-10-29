'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config')

mongoose.connect(config.mongoInstance, {useMongoClient: true},(err,res)=>{
  if(err){
      console.log('ERROR: connecting to Database.' + err)
  }
  else{
    console.log("Connection to"+ config.mongoInstance + "was succesfull");
    app.listen(config.PORT, ()=>{
      console.log("Node sv running on http://localhost" + config.PORT)
    })
  }
})