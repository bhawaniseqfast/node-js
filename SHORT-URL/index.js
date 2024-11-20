const express  = require("express");
const { connectMongo } = require("./connect");
const URL = require("./models/url");
const UserRoute = require("./routes/user");
const path = require("path");
const urlRouter = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");

const app = express();
const PORT = 8001;

connectMongo("mongodb://127.0.0.1:27017/short-url")
.then( () => console.log("mongodb connected successfully...") );

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded ( {extended : false} ));
app.use(cookieParser());



app.get("/test", async ( req, res) => {
      const allUrls = await URL.find({});
    return res.render("home", {
        urls : allUrls
    });
})

app.use("/url", restrictToLoggedinUserOnly, urlRouter);
app.use("/user", UserRoute);
app.use("/", checkAuth, staticRoute);



app.get("/url/:shortId", async (req, res) => {
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