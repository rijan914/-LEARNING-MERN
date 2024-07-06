// ["my","name","is"]=> ["My","Name","Is"]
const firstLetterCapital =(input) => {
  let inputAr1 = input.split("");
  let inputAr2 = inputAr1.map((value,i)=> {
    if(i===0){
      return value.toUpperCase();
    }
    else{
      return value.toLowerCase();
    }
  });
  let output=inputAr2.join("")
  return output;
};
let realInput=['my','nAme','is','niTan']
const realOutput=realInput.map((value,i)=>{
  return firstLetterCapital(value);
});
console.log(realOutput)
