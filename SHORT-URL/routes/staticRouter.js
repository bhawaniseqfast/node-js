const express = require("express");

const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
    if(!req.user)
        return res.redirect("/login");

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