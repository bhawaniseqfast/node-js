const express = require("express");

const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
    const allUrls = await URL.find({});
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