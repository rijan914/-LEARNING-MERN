// make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter

let canEnterRoom = (age) => {
    if(age < 18){
        return "You can enter"
    }else{
        return "You can not enter"
    }
}
result = canEnterRoom(38)
console.log(result)
result = canEnterRoom(16)
