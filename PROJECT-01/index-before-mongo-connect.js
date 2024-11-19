const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");
const { error } = require("console");

const app     = express();
const PORT    = 8000;

//mongodb://127.0.0.1:27017/
//connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then( () => console.log("Mongodb Connected"))
.catch( (err) => console.log("Mongo Error", err) ); 


//ish file ko maine backup k liye rkh liya hai--yh baki ki nhi hai OK
//Schema
const userSchema = new mongoose.Schema({
   firstName : {
        type : String,
        required  : true,
    },
    lastName :{ 
        type : String,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    jobTitle : {
        type : String,
    },
    gender : {
        type : String,
    }

});

const user = mongoose.model("user", userSchema);




//middleware 
app.use(express.urlencoded( { extended : false }))


// routes
app.get('/api/users', (req, res) => {
    console.log(req.headers.mytoken);
   // req.setHeader("MyToken", "12345677");

   //always add to X to custom header
    res.setHeader("X-MyName", "Rohit Sharma");
    res.status(202).json(users);
})

app.get("/users", (req, res)=> {
    res.send(users);
})


app.post('/api/users', (req, res) => {
    console.log("reach here----");
    const body = req.body;
    console.log(body);
    users.push({...body, id : users.length +1}); 
    console.log("---i want to know users data");
   // console.log(users);
    
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (req, res) => {
      //return res.json({status: "success", id : users.length}); 
      return res.status(201).end({ status: "success", id: users.length });
    })


   
})


app.delete('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    console.log(userId);

    fs.readFile("./MOCK_DATA.json", "utf8", (re ,data) => {
    if(re)
    {
    console.error('Error reading file:', err);
    return res.status(500).json({status: "error", message: error});
    }

    let datas; 
    datas = JSON.parse(data);

       
    const userinfo = users.filter((user) => user.id !== userId);
    //console.log(userinfo);
    console.log("userinfo length", userinfo.length);
    console.log("userinfo length", typeof(userinfo.length));
    console.log("user info length", datas.length);
    console.log("user info length", typeof(datas.length));

    if(userinfo.length == datas.length)
    {
        console.log("why come to this line");
     return res.status(404).json({status: "error", message: "Your ID does not exist in our record...."})
    }


    fs.writeFile("./MOCK_DATA.json", JSON.stringify(userinfo), (error)=>{

        if(error)
        {
            return res.status(500).json({status: "error", message: error});
        }else{
            return res.status(200).json({status:"success", message:"user deleted successfully..."})
        }
    })



   // return res.json({status: "pending", user: userinfo});
})

})



app.patch("/api/users/:id", (req, res) => {

   const userId = Number(req.params.id);
   const body = req.body;
   //console.log(userId);
   //console.log(body);

  
   //console.log(typeof users);
   const userIndex = users.findIndex((user) => user.id === userId);

   console.log("new user: data:-", users.length);
   console.log("user index", userIndex);

   if(userIndex == undefined)
   {
    return res.status(404).json({status:"error", message: "ID not ..."}); 
   }

   if(userIndex === -1)
   {
      // No user found with the provided ID 
      return res.status(404).json({status:"error", message: "Your ID does not exist in our record..."}); 
   }

   users[userIndex] = {...users[userIndex], ...body};

   console.log("update data", body);

   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error)=> {
        if(error)
        {
            return res.status(500).json({status:"error", message: "failed to update user data..."});    
        }else{
            return res.status(200).json({status:"success", message: "user updated successfully..."})
        }
     
   })


})


app.listen(PORT, () => console.log(`Server Started  at PORT: ${PORT}`));     