/*
👉 What are operators in JavaScript ?

JavaScript operators are used to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments.

👉 Arithemetic Operators

Operator	    Description
----------------------------------------
+	            Addition
-	            Subtraction
*	            Multiplication
**	            Exponentiation/Power (ES2016)
/	            Division
%	            Modulus(Remainder)

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(13 % 3);

👉 String concatenation with (+) operator

Usually, the plus operator + sums numbers. But, with string, it merges them.

const str1 = "Hello";
const str2 = "Mohit";
console.log(str1 + " " + str2);

If any of the operands is a string, then the other one is converted to a string too.

console.log("2" + 1); // 21
console.log(1 + "2"); // 12
console.log(4 + 4 + "2"); // 82
console.log("2" + 4 + 4); // 244

👉 Increment and Decrement Operator

let counter = 10;
counter++; // works the same as counter = counter + 1

let sum = 10;
sum--; // works the same as counter = counter - 1

The operators ++ and -- can be placed either before or after a variable.

- When the operator goes after the variable, it is in “postfix form”: counter++.
- The “prefix form” is when the operator goes before the variable: ++counter.

Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

let preCount = 20;
let newPreCount = ++preCount;

console.log(newPreCount); // 21
console.log(preCount); // 21

let postCount = 20;
let newPostCount = postCount++;

console.log(newPostCount); // 21
console.log(postCount); // 20

👉 Comparison Operators

Comparison operators are used for compare expressions, number value and statements, return value will be a boolean value.

Operator	Description
<	        Less than
>	        Greater than
==	        Loose equality
===	        Strict equality(Check type also)
!=          Loose not equality
!==         Strict not equality(Check type also)

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("5" === 5);

console.log(true == 1); // true, `true` is 1 in JavaScript
console.log(false == 0); // true, `false` is 0 is JavaScript

console.log(true === 1); // false, type different
console.log(false === 0); // false, type different
*/
