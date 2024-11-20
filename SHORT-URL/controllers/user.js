const User = require("../models/user");
const {v4: uuidv4} = require("uuid");
const {setUser, getUser} = require("../service/auth");

async function handleUserSingup(req, res){
    const {name, email, password} = req.body;

    User.create({
        name,
        email,
        password,
    });

    return res.render("login");
}


async function handleUserLogin(req, res){
    console.log("login credentials", req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    console.log("user", user);
   
     if(!user)
        return res.render("login", {
           error : "Invalid Username or Password"
        });
       

      const token = setUser(user);
        //res.cookie("uid", token);
       // return res.redirect("/");
       return res.json({ token });


}

module.exports = {handleUserSingup, handleUserLogin}