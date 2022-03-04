// alert("connected")
var promise = new Promise(function(resolve,reject){
    var drive=true;
    if(drive){
        resolve("YES");
    }
    else{
        reject("NO");
    }
});
promise.then(function(resolve){
    // document.write(resolve + "the users know How to drive ." );
    console.log(resolve + " The users know How to drive .");
}).catch(function (reject){
    console.log(reject + " The user do not know how to drive ");
});



