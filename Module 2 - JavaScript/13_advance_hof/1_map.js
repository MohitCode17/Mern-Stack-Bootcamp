/* 
👉 The Map Method

The Map method in JavaScript is a higher-order function that iterates over each element of an array, allowing you to apply a specified function to each element. This function is commonly referred to as a callback function.

The key feature of the Map method is that it creates a new array based on the results of applying this callback function to each element of the original array, without modifying the original array itself.

Example:-

const prices = [100, 200, 300];
const withTax = prices.map(price => price * 1.18);

console.log(withTax); // [118, 236, 354]
*/
