const http = require("http");
const fs   = require("fs");
const url  = require("url"); 










//request object
//response object

const myServer =  http.createServer( (req, res) => {


    const myurl = url.parse(req.url, true);
    console.log(myurl);
    console.log(myurl.query.name);
    console.log(myurl.query.q);

   if(myurl.pathname === "/favicon.ico") return res.end();
   const log = `${Date.now()}  ${req.method}: ${req.url} New request received\n`;
   fs.appendFile("log.txt", log, (err, data) => {

   
   
       switch(myurl.pathname)
       {
           case '/':res.end("HomePage");
           break;
           case '/about':
           const myquery = myurl.query.name;    
           res.end(`I am right path to learn new thing... ${myquery}`);
           break;
           case '/contact':res.end("Contact us");
           break;
           case '/singup': 
           if(req.method == "GET")
           res.end("This is singup form...");
           elseif(req.method == "POST")
           {
               res.end("submit the data into database...");
           }
           break;
           default:res.end("404 not page...");
       }
       
   })

} );

myServer.listen(8000, () => console.log("server is working now..."));