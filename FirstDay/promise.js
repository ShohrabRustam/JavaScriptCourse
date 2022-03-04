// alert("connected")
var promise = new Promise(function(resolve,reject){
    var drive=true;
    if(drive)
    {
        resolve("YES");
    }
    else
    {
        reject("NO");
    }
});
promise.then(function(resolve){
    // document.write(resolve + "the users know How to drive ." );
    console.log(resolve + " The users know How to drive .");
}).catch(function (reject){
    console.log(reject + " The user do not know how to drive ");
});


//Under-Standing of the Promises 

 var functions= function (){
     return new Promise(function(resolve,reject){
        resolve(" Learn Function in JavaScript ! ");
     });
 };


 var callback = function (message)
 {
     return new Promise(function(resolve,reject){
         resolve(message + "Learn callback function in JavaScript ! ");
     });
 };

 var promises = function(message){
     return new Promise(function(resolve,reject)
     {
         resolve(message + " Good to Go to the promises in JavaScript! ");
     });
 }

 functions().then(function(result){
     return callback(result);
 }).then(function(result)
 {
     return promises(result);
 }).then(function(result){
     console.log("Good to Go to the : " + result);
 });

