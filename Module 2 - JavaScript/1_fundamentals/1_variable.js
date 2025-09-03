/*
👉 What is variables ?

A variable is a `container` for storing information. `var`, `let`, & `const` are the keyword used to declare a variables.


👉 Let's declare a variable.

let accountPassword;
accountPassword = "Mg@123";
console.log(accountPassword);

📝 console. log is a built-in function that allows you to output messages or values to the console. It is commonly used for debugging and understanding what is happening in your code.

let accountHolderName = "Mohit Gupta";
console.log(accountHolderName);

👉 Constant in JavaScript

Sometime we want to declare a variable that cannot be changed or reassiged throughout the program. We use `const` keyword to declare constant variable.

const accountNumber = 112244557788;

👉 Variable Naming

There are two limitations on variable names in JavaScript:

- The name must contain only letters, digits, or the symbols $ and _.
- The first character must not be a digit.

⭐IMPORTANT FOR INTERVIEW POINT OF VIEW

Let's see, how var, let, and const differ in terms of intiailization rule.

👉 Initialization Rule:-

`var` and `let` can be initialized without a value, but `const` declaration must be initialized.

var myName;
let myAge;
const myAddress; // Error: 'const' declarations must be initialized.

👉 Redeclaration:-

Redeclaring a variable with `var` will not throw an error, but `let` and `const` will.

var myName = "Mohit";
var myName = "Rohan";

let myAge = 26;
let myAge = 27; // SyntaxError: Identifier 'myAge' has already been declared

const city = "New Delhi";
const city = "Mumbai"; // SyntaxError: Identifier 'myAge' has already been declared

👉 Reassignment:-

`var` and `let` allow reassignment variable's value while `const` does not.

var myName = "Mohit";
myName = "Rohan";

let myAge = 26;
myAge = 27;

const city = "New Delhi";
city = "Mumbai"; // TypeError: Assignment to constant variable.
*/
