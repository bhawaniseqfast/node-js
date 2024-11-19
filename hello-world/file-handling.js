

const fs = require('fs');

//Method 1 :- write file with sync type
//const data = "Hello All, my name is ajay. i am from pilani. i am working on IT engineering.";
//fs.writeFileSync('writedemo.txt', data);


//Method 2 :- read file with sync type
//const content = fs.readFileSync("writedemo.txt", "utf-8");
//console.log(content);


//Method 3 :- read file with asyncronous method
/*fs.readFile("writedemo.txt", "utf-8", function(err, data){

    if(!err)
    {
        console.log("new india ", data);
    }
})*/


//Method 4 :- write file with async method
/*const data1 = "I have written all file code successfully.";
fs.writeFile("writeonemore.txt", data1, function(err){

    if(err)
        throw err;

})*/

//Method 5 :- appendfile with sync
//append file means write someting in existing file

//const data2 = "\n Ajay :- 7014843917\n";
//const data3 = "\n Vinay :- 9655441111\n";
//const result = fs.appendFileSync("./writedemo.txt", data2+' '+data3);
//console.log(result);


//const data2 = "\n Ajay :- 7014843917\n";
//const data3 = "\n date :- "+ `${Date.now()}`;
//const result = fs.appendFileSync("./writedemo.txt", data2+' '+data3);
//console.log(result);


//Method 6 :- copy file
//fs.cpSync("./writedemo.txt", "copied.txt");

//Method 7 :- unlink file
//fs.unlinkSync("./copied.txt");

//Method 8 :- make directory
fs.mkdirSync("my-docs/a/b", {recursive:true});


