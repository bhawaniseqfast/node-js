//1. blocking
//2. non-blocking


//by default thread pool size  = 4 
//can i increase the thread pool size -- ? yes
//depend on cpu core size
// how much you have core.


//1.blokcing code and stop the process until result will not come

const fs = require('fs');

/*console.log("1");
const result = fs.readFileSync("./writedemo.txt", "utf-8");
console.log(result);
console.log("2");
console.log("3");
console.log("4");
console.log("5");*/


//2. non-blocking code , not stop the code and process go and apart from process and running working different manner.


console.log("1");
const result = fs.readFile("./writedemo.txt", "utf-8", function(err, result) {

    if(err)
        console.log(err);

    if(result)
        console.log(result);


});
console.log(result);
console.log("2");
console.log("3");
console.log("4");
console.log("5");


//now discuss about the node architure

// 1. client send the request to the server.
// 2. server catch the request and identity
// 3. which type of request coming  like syncrhronous or asynchronous

/*1. asyncronous then ==> go to the event queue 
and go to the event loop. 
event loop every time watching on event equeue.

if asynchronous then normal work and give the result. 

if syncrhronush then 
need a thread 
and thread assign a worker 
worker complete our work then give result. 
it is all process*/
