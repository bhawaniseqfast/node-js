const {getUser, } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next){
    console.log("restrict loggin", req.headers);
                                 
    const userUid = req.headers["authorization"];
   

    if(!userUid)
        return res.redirect("/login");

    const token = userUid.split("Bearer ")[1];

    const user = getUser(token);
    if(!user)
        return res.redirect("/login");

    req.user = user;
    next();
}


async function checkAuth(req, res, next)
{
    console.log("check auth", req.headers);
                                 
    const userUid = req.headers["authorization"];
    //console.log("userUid check the detail:-", userUid);
    const token = userUid.split("Bearer ")[1];
   // console.log("userUid check the token:-", token);
    const user = getUser(token);
    console.log("user detail:-", user);
    req.user = user;
    next();
}


module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth
}