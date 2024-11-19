const express = require("express");
//const  mongoose  = require("mongoose");
//by default index file assume kr k chlta hai. ki mujhe yh wali file uthani hai
const { logReqRes } = require("./middlewares");

const {connectMongoDb} = require("./connections");
const userRouter = require("./routes/user");

//const users = require("./MOCK_DATA.json");
//const { error } = require("console");

const app     = express();
const PORT    = 8000;
//mongodb://127.0.0.1:27017/
//connection

//mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
//.then( () => console.log("mongodb connection now...") )
//.catch( () => console.log("error") );



connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then( () => console.log("Mongodb connected ajay...")).catch( (err) => console.log("mongo error", err  ));

//Schema


//middleware 
app.use(express.urlencoded( { extended : false }))

 app.use(logReqRes("log.txt"));


// routes
app.use("/users", userRouter);




app.listen(PORT, () => console.log(`Server Started  at PORT: ${PORT}`));     