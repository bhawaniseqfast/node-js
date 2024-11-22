const express = require("express");
const { restrictTo } = require("../middlewares/auth");
const URL = require("../models/url");

const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    const allUrls = await URL.find({});
    console.log(allUrls);
    return res.render("form", {
        urls : allUrls,
    });
})

//IN-LINE MIDDLEWARE USED HERE
router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const allUrls = await URL.find({createdBy:req.user._id});
    console.log(allUrls);
    return res.render("form", {
        urls : allUrls,
    });
})

router.get("/singup", (req, res)=>{
    return res.render("singup");
})

router.get("/login", (req, res)=>{
    return res.render("login");
})

module.exports = router;