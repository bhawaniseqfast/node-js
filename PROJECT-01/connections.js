const  mongoose  = require("mongoose");

console.log("in connectio file...");

async function connectMongoDb(url) 
{
   console.log("inside function file...");
   return mongoose.connect(url);
}


module.exports = {  connectMongoDb, }