function add(a, b)
{
    return a + b;
}

function sub(a, b)
{
    return a -b;
}


//default export or single
module.exports = {
    addfn : add,
    subfn : sub
 };


 //exports.addfn = (a, b) => a + b ;

 //exports.subfn = (a, b) => a -b;
