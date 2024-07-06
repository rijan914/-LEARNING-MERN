// we can use filter in following cases 
//  [1,3,10] = [1.10]
//  [1,3,10] = [1]
//  but not in [1,3,10] = [1,9]

let input = [ 1,2,3,4,5]
// output = [3,4,5]

let output = input.filter((value,i)=> {
    if(value>=3){
        return true;
    }
    else{
        return false;
    }
});
console.log(output)
