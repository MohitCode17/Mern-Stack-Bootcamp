/*
👉 Reduce Method in JavaScript

The reduce() method got its name from the functionality it provides, which is to iterate and “reduce” an array's values into one value.

The easiest way to understand how the reduce() method works is through an example, so let’s see an easy one first.

const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

const totalPrice = items.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);

console.log(totalPrice);
*/
