let array = [1,2,3,4,5];
console.log(array.map((element)=>{
    return element/3;
}));

// filer in array 

let newArray = array.filter(element=>{
    if(element>2)
        return true;
    return false;
}); 