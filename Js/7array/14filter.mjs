//filter string only

let input =[-1,2,"raj",6,3,-99,923,"ram","hari"];
let output =input.filter((value,i)=>{
    if(typeof value==="string"){ 
        return true; 
        }
    else{
        return false;
    }
});
console.log(output);
