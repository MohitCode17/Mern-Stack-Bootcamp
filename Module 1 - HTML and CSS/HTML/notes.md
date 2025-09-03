
# 🌐 HTML - Learn What Matters

## 📌 1. What is HTML?

**HTML** stands for **HyperText Markup Language**.  
It is **not** a programming language — it's a **markup language** used to structure content on the web using **tags**.

### 🔹 Basic Terms

| Term                | Description                                    | Example                       |
|---------------------|-----------------------------------------------|-------------------------------|
| **Marker**          | Symbols used to create tags                  | `< >`                         |
| **Opening Tag**     | Starts an HTML element                        | `<p>`                         |
| **Closing Tag**     | Ends an HTML element                          | `</p>`                        |
| **HTML Element**    | A complete structure with opening & closing tag | `<p>Hello, I'm HTML</p>`      |

---

## 🏗️ 2. Boilerplate Code

Before writing any HTML code, you need the **boilerplate structure**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>
```

---

## 🏷️ 3. DOCTYPE

The `<!DOCTYPE>` declaration tells the browser which version of HTML the document uses.

- **HTML5 DOCTYPE:**

```html
<!DOCTYPE html>
```

---

## 🧩 4. Meta Tags

Meta tags provide **metadata** about the HTML document, such as **charset**, **viewport**, and **description**.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
```

Common uses of `<meta>`:

| Attribute       | Purpose                                  |
|---------------|------------------------------------------|
| `charset`     | Defines the character encoding           |
| `viewport`    | Controls responsive scaling             |
| `description` | Describes the page content               |
| `author`      | Specifies the author of the document     |

---

## ✍️ 5. Text in HTML

HTML provides **headings** and **paragraphs** for organizing content.

### 🔹 Headings

- There are **6 heading tags**: `<h1>` to `<h6>`.
- `<h1>` = Most important, `<h6>` = Least important.

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Small Heading</h3>
```

### 🔹 Paragraphs

- Paragraphs are defined using `<p>`.

```html
<p>This is a paragraph in HTML.</p>
```

---

## 📝 6. HTML Lists

HTML supports two types of lists:

### 🔹 Unordered List

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### 🔹 Ordered List

```html
<ol>
  <li>Step One</li>
  <li>Step Two</li>
  <li>Step Three</li>
</ol>
```

---

## 🖼️ 7. HTML Images

Images are embedded using the `<img>` tag.

```html
<img src="image.jpg" alt="Description of image" />
```

| Attribute | Description                                |
|-----------|--------------------------------------------|
| `src`     | Specifies the image path                   |
| `alt`     | Provides alternative text if image fails   |

---

## 🔗 8. HTML Links

Links are created using the `<a>` tag.

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

| Attribute | Description                                       |
|-----------|---------------------------------------------------|
| `href`    | The destination URL                              |
| `target`  | Where to open the link (`_self`, `_blank`, etc.) |

---

## 🧾 9. HTML Forms

Forms collect **user input** and send it to a server.

### 🔹 Basic Form Example

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />

  <input type="submit" value="Submit" />
</form>
```

### 🔹 Common Input Types

| Input Type    | Example Code                   |
|--------------|--------------------------------|
| Text         | `<input type="text" />`         |
| Password     | `<input type="password" />`     |
| Email        | `<input type="email" />`        |
| Checkbox     | `<input type="checkbox" />`     |
| Radio Button | `<input type="radio" />`        |
| Date         | `<input type="date" />`         |
| Submit       | `<input type="submit" />`       |

---

## 🧱 10. `<div>` in HTML

- The `<div>` element is a **block-level container** used to group HTML content.
- It **takes full width** by default and creates a **new line** before and after.

```html
<div class="container">
  <h2>Title</h2>
  <p>This is inside a div.</p>
</div>
```

---

## 🧩 11. `<span>` in HTML

- The `<span>` element is an **inline container**.
- It takes **only the required width** for its content.
- Commonly used for styling specific text.

```html
<p>This is a <span style="color: red;">highlighted</span> word.</p>
```

| Element | Type     | Behavior             |
|--------|----------|----------------------|
| `<div>` | Block   | Takes full width      |
| `<span>`| Inline  | Takes minimal width   |

---

## 📌 Summary

| Topic          | Tag / Attribute    | Purpose                            |
|---------------|---------------------|------------------------------------|
| Boilerplate   | `<!DOCTYPE>`        | Defines HTML5 document structure   |
| Headings      | `<h1>` - `<h6>`     | Title hierarchy                    |
| Paragraphs    | `<p>`              | Defines text blocks                |
| Lists         | `<ul>`, `<ol>`, `<li>` | Organize items                   |
| Images        | `<img>`            | Embed images                       |
| Links         | `<a>`              | Navigate to other resources       |
| Forms         | `<form>`, `<input>` | Collect user input                |
| Div           | `<div>`            | Block-level container             |
| Span          | `<span>`           | Inline container                  |
