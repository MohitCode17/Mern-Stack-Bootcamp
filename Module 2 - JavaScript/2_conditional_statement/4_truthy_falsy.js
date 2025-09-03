/*
👉 Truthy & Falsy Values

In JavaScript, truthy and falsy values are terms used to describe how different values are interpreted in boolean contexts.

👉 Falsy Values

A falsy value is a value that is considered false when encountered in a boolean context.

1. false
2. 0 (zero)
3. -0 (negative zero)
4. "" (empty string)
5. null
6. undefined
7. NaN (Not-a-Number)

if (0) {
  console.log("This won't execute because 0 is falsy");
}

👉 Truthy Values

A truthy value is any value that is not falsy. These values are considered true when evaluated in a boolean context.

1. true
2. Any non-zero number (e.g., 1, -5, 3.14)
3. Any non-empty string (e.g., "Hello", "0", "false")
4. Objects and arrays (even empty ones, e.g., {} and [])
5. Infinity and -Infinity

if ("Hello") {
  console.log("This will execute because 'Hello' is truthy");
}
*/
