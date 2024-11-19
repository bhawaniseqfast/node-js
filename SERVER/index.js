//const http = require("http");
const express = require("express");

const app = express();


app.get('/', (req, res) => {
    return res.send("Hello From Home Page");
});

app.get('/about', (req, res) => {
    const query = req.query.q;
    const name = req.query.name;
    return res.send(`Hello From About Page hey - ${name}`);
})


//request object
//response object

//const myServer =  http.createServer( app );

//myServer.listen(8000, () => console.log("server is working now..."));

app.listen(8000, () => console.log("server is working now..."));