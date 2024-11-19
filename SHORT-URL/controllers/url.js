const { v4: uuidv4 }= require('uuid');
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res){

    const body = req.body;
    if(!body.url)
        return res.status(400).json({error : "url is required"});

    const ShortID = uuidv4();
   await URL.create({
      shortId : ShortID,
      redirectURL : body.url,
      visitHistory : []
    })

    return res.json({id : ShortID})
    
}


async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    console.log(shortId);
   const result =  await URL.findOne({ shortId });
   return res.json({ totalClicks : result.visitHistory.length , analytics : result.visitHistory})
}


module.exports = {handleGenerateNewShortURL, handleGetAnalytics}