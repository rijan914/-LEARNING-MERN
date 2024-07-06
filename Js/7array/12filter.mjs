// filter even [1,2,6,3] => [2,6]

let input =[1,2,6,3];
let output =input.filter((value,i)=>{
    if(value%2 ==0)
        { return true; 
        }
    else{
        return false;
    }
})
console.log(output);
