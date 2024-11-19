const express  = require("express");
const { connectMongo } = require("./connect");
const URL = require("./models/url");

const urlRouter = require("./routes/url");

const app = express();
const PORT = 8001;

connectMongo("mongodb://127.0.0.1:27017/short-url")
.then( () => console.log("mongodb connected successfully...") );


app.use(express.json());
app.use("/url", urlRouter);


app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    console.log(shortId);

 const entry =   await URL.findOneAndUpdate({shortId}, 
        {
       $push : {
        visitHistory: { timestamp: Date.now() }
       }
    });

    return res.redirect(entry.redirectURL);

})



app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`) )