const reverseWord = (value) => {
    return value.split("").reverse().join("");
  };
  let outputArr1 = input.split(" ").map((value, i) => {
    return reverseWord(value);
  });
  console.log(outputArr1.join(" "));