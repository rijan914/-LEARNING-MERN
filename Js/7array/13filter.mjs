//filter positive number

let input =[-1,2,-3,6,3,-99,923];
let output =input.filter((value,i)=>{
    if(value>0)
        { return true; 
        }
    else{
        return false;
    }
})
console.log(output);

