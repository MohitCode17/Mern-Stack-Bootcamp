# React - Learn What Matters

## What is React?

React is a popular JavaScript library for building UI, particularly for web applications.

**The Problem with Traditional Web Approach**

1. Web Development Challenges

   - Manipulating DOM
   - Updating State and UI

2. Lack of Reusability

   - Unclear way for building components
   - No consistency
   - Harder to maintain clear code

3. Complex Data Binding
   - Unclear way for building components

### Why React?

1. **Component Based Architecture:** React allows you to break down your UI into reusable components. This makes your code more modular and easier to manage.

2. **Declarative Approach:** React uses a declarative approach to define how your UI should look based on the application's state. Instead of directly manipulating the DOM, you describe what you want the UI to look like, and React takes care of updating the DOM efficiently.

3. **Virtual DOM:** React uses a virtual DOM to represent the UI, which is a lightweight copy of the actual DOM. When the state of your application changes, React compares the virtual DOM with the previous version to determine the minimal set of DOM operations needed to update the UI. This can result in better performance compared to directly manipulating the DOM.

---

## Components

Component is piece of UI that has it's own logic and appearance. A component can be small as a button or large as entire page.

**Defining a component:**

```js
const Profile = () => {
  return (
    <img
      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/the-professor-money-heist-digital-portrait-gururaj-paradkar.jpg"
      alt="The professor"
    />
  );
};

export default Profile;
```

The component returns an `<img />` tag with src and alt attributes. `<img />` is written like HTML, but it is actually JavaScript under the hood! This syntax is called **JSX**.

**Using a component:**

```js
import Profile from "./Profile";

const Gallery = () => {
  return (
    <section>
      <h1>Money Heist Casts</h1>
      <Profile />
      <Profile />
    </section>
  );
};
```

💡 NOTE:-

1. React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

2. Components can render other components, but you must never nest their definitions:

```js
const Gallery = () => {
  const Profile = () => {
    // ....
  };
};
```

---

## JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

```
const MyComponent = () => {
  return <h1>This is my component</h1>
};
```

Inside a return, we have actually write a JSX code, it's similar to HTML but not HTML.

Browsers like chrome, firefox, brave etc. They don't understand What JSX and modern JavaScript is? So, Babeljs.io/repl is a tool that compile/transpile JSX into JavaScript so that browser can understand.

💡 Note:-

JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

**The Rules of JSX**

1. **Return a single root element:** To return multiple elements from a component, wrap them with a single parent tag.

   For example, you can use a `<div>`

   ```
   const MyComponent = () => {
      return(
         <h1>Hello from my component</h1>
         <p>How are you?</p>
      );
   }

   ❌ Wrong way to render a multiple elements
   ```

   ```
   const MyComponent = () => {
      return(
         <div>
            <h1>Hello from my component</h1>
            <p>How are you?</p>
         </div>
      )
   }

   ✅ Right way to render a multiple elements
   ```

2. **Close all the tags**: JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>`oranges must be written as `<li>`oranges`</li>`

3. **camelCase all most of the things:** `className` instead of `class`, since `class` is reserved keyword. `strokeWidth` instead of `stroke-width`, `backgroundColor` instead of `background-color`.

---

## Props

`Props` are used to pass data from a parent component to a child component. They are a way of making components reusable by providing them with dynamic values. Props are read-only, meaning the child component cannot modify them.

In previous lecture, we have build our first react app and learn how component build and reuse in a code. But IS this actually a reusable?

NO, Though we reuse the component but with same value.

The idea of reusable component can be found all over the internet. If you go Amazon.com you'll see list of products like cellphones and accessories.

Although the information of each of these products is different, the structure of it appears to be exactly the same.

And in React, there is where the concept of `props` comes into play.

```js

// Passing Props to Component....
const Gallery = () => {
   return (
      <Profile
         person={{name: "Rohit Sharma", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25uhv3LIGyCcgSljUsZiFB_t9B_HjZ13kIg&s"}},
         size={100}
      />
   );
}

// Receive Props in Component....
const Profile = ({person, size}) => {
  // Now we can access person and size props here...
};
```

---

## List Rendering

You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data.

**Rendering Data From Array**

```
const people = [
  'Rohit Sharma',
  'Lionel Messi',
  'Narendra Modi',
  'Virat Kohli',
];
```

```
const List = () => {
   return (
      <div>
         {people.map((item) => (
            <div>
               <h1>{item}</h1>
            </div>
         ))}
      </div>
   )
};

⚠️: Each child in a list should have a unique "key" prop.
```

You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

```
const people = [
  {id: 0, name: "Rohit Sharma"},
  {id: 1, name: "Lionel Messi"},
  {id: 2, name: "Narendra Modi"},
  {id: 3, name: "Virat Kohli"},
];
```

```
const List = () => {
   return (
      <div>
         {people.map((item) => (
            <div key={item.id}>
               <h1>{item.name}</h1>
            </div>
         ))}
      </div>
   )
};
```

---

## Adding JavaScript Expression

Expressions can be simple, such as a single variable, or complex, involving operators, function calls, and other expressions.

In React, you can inject expressions directly into JSX code by enclosing them in curly braces {}. This allows you to dynamically render values, variables, or the results of expressions within your components.

{ } is also called evaluated expression, because we don't write whole javascript, we can only inject the final outcome which evaluate.

Here's an example:-

```js
const DemoFunc = () => {
  const name = "Mohit";
  const isAdmin = true;

  const checkAdmin = () => {
    return isAdmin === true ? "You're admin." : `You're guest user.`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{checkAdmin()}</h3>
    </div>
  );
};
```

---

## Conditional Rendering

Conditional rendering in React is a technique used to render components or elements based on certain conditions. This means you can control whether or not certain JSX elements are displayed based on variables, props, or state.

```
 * Jokes Application:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: "It’s hard to explain puns to kleptomaniacs because
 * they always take things literally."
 *
 * how might you make it only
 * show the punchline?
```

```javascript
import React from "react";

const Jokes = ({ setup, punchline }) => {
  return (
    <>
      {setup && <p className="setup">Setup: {setup}</p>}
      <p className="punchline">Puncline: {punchline}</p>
      <hr />
    </>
  );
};

export default Jokes;
```

```
Explanation:

{setup && ...}:

- This checks if the setup prop exists.
- If setup is truthy, it renders the <p> tag for the setup.
- If setup is falsy (e.g., undefined, null, or an empty string), it skips rendering that line.
```

---

## State in React

State is a way to store and manage data that can change over time and affects how the component render.

### Why State Comes into the Picture

In React, components are used to build the UI. But a UI often changes over time based on:

- User interactions → clicking a button, typing in an input, selecting an option.
- External data → API responses, database updates, notifications.
- Internal logic → counters, toggles, active tabs, etc.

Without state, the UI would be static — it wouldn’t update when data changes.

### How to Manage State

There are two types of state management in React:

**(A) Local State — Inside a single component**

- Managed using useState hook.
- Example: form inputs, toggle buttons, counters.

**(B) Global State — Shared between multiple components**

- Managed using:
  - Context API
  - Redux / Zustand / Recoil (for large apps)

### What is useState Hook?

useState is a React Hook that lets you add state to a functional component.

```js
const [state, setState] = useState(initialValue);
```

- state → Current value of the state.
- setState → Function used to update the state.
- initialValue → Default value for the state.

**Example**

```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
```

**How it works**

- Initially, count = 0.
- When you click Increase, React calls setCount(count + 1) → triggers re-render.
- The new UI shows the updated count.

### Updating State Correctly

There are two ways to update state, and you should know the difference.

**(A) Using current state value**

```js
setCount(count + 1);
```

⚠️ Problem: If multiple updates happen quickly, it might not give the correct value.

**(B) Using callback function (Best practice ✅)**

```js
setCount((prevCount) => prevCount + 1);
```

- prevCount always gives the latest value.
- Recommended when new state depends on old state.

### Managing Complex State (Objects)

```js
import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <input name="name" onChange={handleChange} placeholder="Enter Name" />
      <input name="email" onChange={handleChange} placeholder="Enter Email" />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserForm;
```

Here, we use the spread operator (...prevUser) to avoid overwriting other fields

### Real Life Example - Dark Mode Toggle

```js
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
}

export default App;
```

---

## Side Effect

In React, your components are supposed to be pure functions of their props and state.
That means, for the same props and state, they should always return the same UI.

However, sometimes we need to do tasks outside of React's scope, such as:

- Fetching data from an API ✅
- Setting up event listeners ✅
- Updating the document.title ✅
- Using setTimeout or setInterval ✅
- Accessing browser APIs like localStorage, geolocation, etc. ✅

These tasks are called side effects because they affect something outside the component.

### Why Do We Need to Manage Side Effects?

React renders components multiple times — not just once.
If we put our side effect logic directly inside the component body, it’ll execute on every render, which causes problems:

- Unnecessary API calls
- Performance issues
- Infinite loops

That’s where useEffect comes into play.

### What is useEffect Hook?

The useEffect hook lets you perform side effects in a controlled and optimized way.

```js
useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

**Parameters**

- Callback Function → Where you put your side effect logic.
- Cleanup Function (optional) → Used to remove or clean up effects when a component unmounts or dependencies change.
- Dependency Array → Controls when the effect runs.

### Types of useEffect Usage

```js
useEffect(() => {
  console.log("I run after every render");
});

// ✅ No dependency array - effect run every time component renders
```

```js
useEffect(() => {
  console.log("Component mounted!");

  // Example: fetching data when app loads
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);

// ✅ Empty dependency array [] → effect runs only once when the component mounts.
```

```js
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);

// ✅ Runs only when count changes.
```

```js
useEffect(() => {
  const handleResize = () => console.log("Window resized");

  window.addEventListener("resize", handleResize);

  // Cleanup when component unmounts
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

// ✅ Always remove event listeners or cancel subscriptions in cleanup.
```

---

## React Portal

A Portal in React is a way to render a component’s JSX outside its normal parent DOM hierarchy, while still keeping it in the same React tree.

React introduced Portals in React 16 using the `ReactDOM.createPortal()` API.

```jsx
ReactDOM.createPortal(child, container);

// child → The JSX you want to render.
// container → The DOM node where you want to render it.
```

### Why Do We Need Portal? 🤔

Normally, React components render inside their parent DOM structure.
But sometimes, we need to render something outside the usual DOM hierarchy — for example:

- Modals / Popups 🪟
- Tooltips 💡
- Dropdowns 📌
- Floating notifications 🔔

**Simple Example - Without Portals**

```jsx
// App.js
import React, { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portals Example ❌ Without Portals</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
```

```jsx
export default function Modal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>I'm a Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

**Problem:**

If .app has CSS like overflow: hidden or z-index: 1, the modal won’t appear correctly. 😐

**Using Portal to Fix it ✅**

We’ll render the modal outside the root app container.

```html
<!-- Step 1 - Update index.html -->
<body>
  <div id="root"></div>
  <div id="portal-root"></div>
</body>
```

```jsx
// Step 2 — Use ReactDOM.createPortal() in Modal

import ReactDOM from "react-dom";

export default function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <h2>I'm a Modal using Portal ✅</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
```

```jsx
import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portals Example ✅ With Portals</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
```

---

## useRef Hook

useRef is a React hook that lets you create a mutable reference to a DOM element or a value that persists across renders without causing re-renders.

```jsx
const ref = useRef(initialValue);
```

- Returns an object → { current: initialValue }
- Does NOT trigger re-renders when .current changes.
- Perfect for storing values or accessing DOM nodes.

### Why Do We Use useRef? 🤔

1. Accessing DOM Elements ✅

- Focus an input field automatically.
- Measure element height, width, or position.
- Control animations.

2. Storing Mutable Values ✅

- Store values between renders without re-rendering.
- Example: Keeping track of previous values or timer IDs.

3. Avoiding Re-renders ✅

- Unlike useState, updating a ref doesn't cause re-rendering.
- Useful when you want to store data but don't want to trigger UI updates.

### How To Use It?

```jsx
// ACCESSING DOM DIRECTLY

import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

## useContext Hook

Before go deep into to understand a useContext Hook, first let's understand how this comes into play?

### Prop Drilling

Prop drilling happens when you pass data (props) from a parent component to deeply nested child components through multiple intermediate components — even if those components don’t actually use the data.

**Example of Prop Drilling**

```jsx
// App.jsx
import React, { useState } from "react";
import ChildA from "./ChildA";

const App = () => {
  const [user, setUser] = useState("Mohit Gupta");

  return (
    <div>
      <h1>Prop Drilling Example ❌</h1>
      {/* Passing "user" down */}
      <ChildA user={user} />
    </div>
  );
};

export default App;

// ChildA.jsx
import ChildB from "./ChildB";

const ChildA = ({ user }) => {
  return <ChildB user={user} />;
};

export default ChildA;


// ChildB.jsx
import ChildC from "./ChildC";

const ChildB = ({ user }) => {
  return <ChildC user={user} />;
};

export default ChildB;


// ChildC.jsx
const ChildC = ({ user }) => {
  return <h2>Hello, {user} 👋</h2>;
};

export default ChildC;
```

**⚠️ Problem:**

Even though only ChildC needs user, we still pass it through ChildA and ChildB unnecessarily.

### How to Avoid Prop Drilling

The best solution: React Context API using the useContext hook.

With Context, we create a global state that any component can access directly without passing props manually.

### What is useContext hook?

The useContext hook allows you to consume global state from a Context directly.

**Steps to Use:**

- Create Context → const MyContext = createContext()
- Wrap Components with Context Provider → `<MyContext.Provider value={data}>`
- Consume Context Anywhere → const value = useContext(MyContext)

---

## useReducer Hook

useReducer is a React Hook used to manage complex state logic in a predictable and organized way.

It works on the Reducer Pattern → you have:

- State → current state of the component.
- Dispatch → a function to trigger actions.
- Reducer Function → defines how state should update based on the action.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Why Use useReducer When useState Exists?

| **Scenario**                              | **useState** ✅         | **useReducer** ✅ |
| ----------------------------------------- | ----------------------- | ----------------- |
| Simple state (one or two values)          | ✔ Best                  | ❌ Overkill       |
| Multiple related states                   | ❌ Gets messy           | ✔ Cleaner         |
| Complex state transitions                 | ❌ Hard to manage       | ✔ Perfect         |
| When next state depends on previous state | ✔ Possible, but verbose | ✔ Natural         |
| Scalable apps                             | ❌ Hard                 | ✔ Easier          |

**Example**

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

```jsx
// Then trigger actions:
<button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
```

---

## useMemo Hook

useMemo is a React Hook used to memoize (cache) the result of a computation.
It returns a cached value and recalculates it only when its dependencies change.

```jsx
const memoizedValue = useMemo(() => {
  // some expensive calculation
  return computedValue;
}, [dependencies]);
```

### Why Do We Use useMemo?

Normally, in React, every render triggers re-computation of all variables inside the component.
This can cause performance issues if the calculation is heavy or if we have a large dataset.

**Without useMemo ❌**

- Every time the component re-renders, expensive calculations are re-executed unnecessarily.
- Leads to slower performance.

**With useMemo ✅**

- Caches the result of expensive calculations.
- Recomputes only when dependencies change.
- Optimizes performance for large computations or filtered data.
