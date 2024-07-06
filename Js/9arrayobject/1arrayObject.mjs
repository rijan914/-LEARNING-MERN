let product = [
    {
      name: "laptop",
      price: 100000,
    },
    {
      name: "mobile",
      price: 30000,
    },
    {
      name: "Tv",
      price: 200000,
    },
  ];
// let output= product.map((value,i)=>{
//     return value.name;
//   });
// console.log(output);
// let output1=product.map((value,i)=>{
//     return value.price;
// })
// let output3=product.map((value,i)=>{
//     return `${value.name} cost Nrs: ${value.price}`
// })
// console.log(output3)


// [{name:"laptop",price:1000},{name:"tv",price:4000}] => filter price less than 25000
let output4=product.filter((value,i)=>{
    if(value.price > 50000){
    return true;
    }
})
let output5=product.map((value,i)=>{
    return value.name
})
console.log(output5)
