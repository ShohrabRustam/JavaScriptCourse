let array = [1,2,3,4,5,6];

const res=array.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(res);