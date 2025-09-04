/*
👉 Closure

A closure is formed when an inner function remembers variables from its outer function even after the outer function has finished executing.

Let’s understand this with an example:

function callApi(method) {
  return function (url) {
    // logic of api call...
    console.log(`Fetching data from ${url} using ${method}`);
  };
}

const url = "https://example.com/api";
const api = callApi("GET");
api(url); //👉 Output: Fetching data from https://example.com/api using GET

🧠 What's Happening Behind the Scenes:

1. Global Execution Context (GEC) is created in call-stack when the script starts.
   - `url` is stored in memory.
   - `callApi` function is stored in memory.
2. When `callApi("GET")` is executed:
   - A Function Execution Context (FEC) is created for `callApi`.
   - The parameter `method = "GET"` is stored in that context.
3. `callApi` returns an inner function, which uses `method`.
4. Here's the interesting part:
   - When `callApi` finishes, its execution context is popped off the call stack.
   - BUT JavaScript notices that the returned inner function still uses `method`.
   - So instead of deleting `method`, JavaScript keeps it alive in memory.
   - This preserved environment is called a closure.

5. When `api(url)` Executes a new Function Execution Context is created for the inner function.
6. In the Memory phase, `url` is stored.
7. In the Code Execution phase:
   - `method` is not found in the inner function’s local memory.
   - So JavaScript looks up the lexical chain — where the function was defined (not where it’s called).
   - It finds method = "GET" in the closure's Lexical Environment.


✅ Real World Closure Example

1. Click Counter Button

```js
function createButtonCounter() {
  let count = 0;

  return function handlClick() {
    count++;
    console.log(`Button clicked ${count} times`);
  };
}

const buttonClick = createButtonCounter();
buttonClick(); // Button clicked 1 times
buttonClick(); // Button clicked 2 times

2. Private Variables (Encapsulation)

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited ₹${amount}, New Balance: ₹${balance}.`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew ₹${amount}, New Balance: ₹${balance}.`);
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100000);
myAccount.deposit(50000);
myAccount.deposit(75000);
console.log(myAccount.getBalance());

💡 Benefit: Balance is not directly accessible from outside - protected by closure.

3. Function Factory (Customized Functions)

```js
function greet(language) {
  return function (name) {
    if (language === "en") {
      console.log(`Hello, ${name}`);
    } else if (language === "hi") {
      console.log(`Namaste, ${name}`);
    }
  };
}

const greetInEnglish = greet("en");
const greetInHindi = greet("hi");

greetInEnglish("John");
greetInHindi("Mohit");
*/
