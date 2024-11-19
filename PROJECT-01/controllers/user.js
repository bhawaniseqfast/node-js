
const User = require("../models/user");


async function  handleGetAllUsers(req, res)
{
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);

}


async function handleGetUserById(req, res)
{
    const user = await User.findById(req.params.id);

    if(!user)
        return res.status(404).json({ error : "user not found..."});
        return res.json(user);
}


async function handleUpdateUserById(req, res)
{
   const user  = await User.findByIdAndUpdate(req.params.id, {firstName: req.body.first_name,
        lastName : req.body.last_name,
        gender : req.body.gender,
        jobTitle : req.body.job_title
        });
      return res.status(200).json({msg: "success"});

}


async function handleDeleteUserById(req, res)
{
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg: "User delete successfully..."});
}


async function handleCreateNewUser(req, res)
{
    console.log("reach here----");
    const body = req.body;
    
    if(!body ||
        !body.first_name ||
        !body.last_name ||
        !body.email || 
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg : "All fields are required..."})
    }

    const result  = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender : body.gender,
        jobTitle : body.job_title,
    });

    console.log("result", result);

    return res.status(201).json({msg : "success", id : result._id});
    // console.log(body);
  
   /* users.push({...body, id : users.length +1}); 
    console.log("---i want to know users data");
    console.log(users);
   */

  /*  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (req, res) => {
      //return res.json({status: "success", id : users.length}); 
      return res.status(201).end({ status: "success", id: users.length });
    })
     
  */  
}

module.exports = { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser }

