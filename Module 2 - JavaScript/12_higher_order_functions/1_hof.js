/*
👉 Higher Order Functions

A Higher-Order Function (HOF) is a function that:

- Takes another function as an argument (callback).
- Returns a function as its result.

👉 Example:-

function greetUser(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Mohit", sayHello));
// Output: Hello, Mohit!

Here, greetUser is a HOF because it accepts another function (sayHello) as an argument.
*/
