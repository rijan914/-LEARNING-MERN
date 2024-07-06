// make a function that takes a sentence and return the greatest(in length) palindrome string 
// eg  greatest("mam is beautiful and madam is fabulous but mom is the best"),it must return madam 

const isPalindrome=(input) =>{
    let ar1= input.split("");
    let ar2= ar1.reverse().join("");
    if(input === ar2){
        return true 
    }
    else{
        return false;
    }

}
let longestPalindrome = (input)=> {
    let temp1 = input.split(" ")
    let temp2 = temp1.filter((word)=> {
        return isPalindrome(word);
    });
    let tempWord = "";
    temp2.forEach((word)=>{
        if(word.length>tempWord.length){
            tempWord = word;
        }
    });
    return tempWord;
};
console.log(longestPalindrome("my mom is beautiful but i like madam"));
