let ar1 = [1,2,3]
let ar2= ar1.reverse();

console.log(ar2)
console.log(ar1)

//reverse method gives new value as well as change original one
const revWord =(input)=> {
    return input.split("").reverse().join("");
};
console.log(revWord("my"));