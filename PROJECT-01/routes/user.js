const express = require("express");

console.log("route step 1");

const router = express.Router();

const {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} = require("../controllers/user");


router.get("/", handleGetAllUsers);
router.post('/', handleCreateNewUser);

/*
router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

*/


/*router.get('/', async (req, res) => {

    const allDbUsers = await User.find({});
    console.log(req.headers.mytoken);
   // req.setHeader("MyToken", "12345677");

   //always add to X to custom header
    res.setHeader("X-MyName", "Rohit Sharma");
    res.status(202).json(allDbUsers);
})*/


router.delete('/:id', handleDeleteUserById);


router.get("/:id", handleGetUserById);


 router.patch("/:id", handleUpdateUserById);

module.exports = router;