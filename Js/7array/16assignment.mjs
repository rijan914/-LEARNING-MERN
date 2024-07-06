// "my name is nitan thapa"
// reverse whole word such that 
// output must be "ym eman si natin apaha"

let input = "my name is nitan thapa";
const revWord = (input) => {
    let inputAr1 = input.split(" "); // Split input into words
    let inputAr2 = inputAr1.map(word => {
        let chars = word.split("");// Split word into characters
        let reversed = chars.reverse().join(""); // Reverse characters and join
        return reversed;
    });
    let inputAr3 = inputAr2.join(" "); // Join reversed words with spaces
    return inputAr3;
}

console.log(revWord(input));
