// make a arrow function named isEven , pass a value, that return true if the given number is even else return false

let isEven = (num) => {
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}
result = isEven(38)
console.log(result)
result = isEven(37)
console.log(result)