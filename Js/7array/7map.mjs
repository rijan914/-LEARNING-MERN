let input=["r","a","b","i","n"]

let output = input.map((value,i)=>{
    if(i==0){
        return(value.toUpperCase())

    }
    else{
        return(value.toLowerCase())
    }
});