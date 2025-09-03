# 🎨 CSS - Learn What Matters

## 📝 1. Text Specific CSS Properties

### 🎨 Common Text Properties

| **Property**     | **Description**          | **Example**                  |
| ---------------- | ------------------------ | ---------------------------- |
| `color`          | Sets the color of text   | `color: red;`                |
| `font-size`      | Changes font size        | `font-size: 16px;`           |
| `font-family`    | Defines the font style   | `font-family: Arial;`        |
| `font-weight`    | Sets text thickness      | `font-weight: bold;`         |
| `font-style`     | Changes font style       | `font-style: italic;`        |
| `text-align`     | Aligns text horizontally | `text-align: center;`        |
| `text-transform` | Changes case of text     | `text-transform: uppercase;` |

### 💡 Example

```css
h1 {
  color: #333;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
```

---

## 📦 2. CSS Box Model

Every HTML element is treated as a **box** in CSS. The **box model** consists of:

```
┌───────────────────────────────┐
│           Margin              │   ← Space outside border (transparent)
│   ┌───────────────────────┐   │
│   │       Border          │   │  ← Surrounds padding + content
│   │   ┌───────────────┐   │   │
│   │   │   Padding     │   │   │  ← Space inside border (transparent)
│   │   │ ┌───────────┐ │   │   │
│   │   │ │  Content  │ │   │   │  ← Text, images, etc.
│   │   │ └───────────┘ │   │   │
│   │   └───────────────┘   │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

### 🧩 Example

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid #333;
  margin: 15px;
}
```

---

## ↔️ 3. Margin

Margins create **space outside the element's border**.

```css
/* Individual properties */
margin-top: 10px;
margin-right: 15px;
margin-bottom: 20px;
margin-left: 5px;

/* Shorthand */
margin: 20px; /* All sides */
margin: 10px 15px; /* Top-Bottom | Left-Right */
margin: 10px 20px 15px; /* Top | Left-Right | Bottom */
margin: 10px 15px 5px 20px; /* Top | Right | Bottom | Left */
```

---

## 🧩 4. Padding

Padding creates **space inside the element's border**.

```css
/* Individual properties */
padding-top: 10px;
padding-right: 15px;
padding-bottom: 20px;
padding-left: 5px;

/* Shorthand */
padding: 15px; /* All sides */
padding: 10px 20px; /* Top-Bottom | Left-Right */
padding: 10px 15px 5px; /* Top | Left-Right | Bottom */
padding: 10px 15px 5px 20px; /* Top | Right | Bottom | Left */
```

---

## 🖼️ 5. Border Related Properties

```css
/* Border style */
border-style: solid; /* solid | dotted | dashed | double */

/* Border width */
border-width: 2px;

/* Border color */
border-color: #333;

/* Shorthand */
border: 2px solid #333;

/* Rounded corners */
border-radius: 10px;
```

---

## 📍 6. Positioning: Absolute

The **`position`** property defines how an element is placed in the document.

- **`position: absolute`** → Removes the element from the **normal flow**.
- Allows precise positioning using **top, right, bottom, left**.

```css
.box {
  position: absolute;
  top: 20px;
  right: 30px;
}
```

---

## 🧭 7. Flexbox

Flexbox is a **modern CSS layout system** for aligning and distributing space within a container.

### 🟢 Flex Container (Parent)

```css
.container {
  display: flex;
}
```

### 🟢 Flex Items (Children)

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

---

### 🔹 `flex-direction`

Defines **main axis** direction.

```css
.container {
  flex-direction: row; /* Default → Left to Right */
  flex-direction: row-reverse; /* Right to Left */
  flex-direction: column; /* Top to Bottom */
  flex-direction: column-reverse; /* Bottom to Top */
}
```

---

### 🔹 `flex-wrap`

Controls whether items **wrap** or stay on one line.

```css
.container {
  flex-wrap: nowrap; /* Default */
  flex-wrap: wrap; /* Items wrap onto new lines */
  flex-wrap: wrap-reverse; /* Wrap in reverse order */
}
```

---

### 🔹 `justify-content` (Horizontal Alignment)

Aligns items along the **main axis**.

```css
.container {
  justify-content: flex-start; /* Default */
  justify-content: center;
  justify-content: flex-end;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

---

### 🔹 `align-items` (Vertical Alignment)

Aligns items along the **cross axis**.

```css
.container {
  align-items: stretch; /* Default */
  align-items: center;
  align-items: flex-start;
  align-items: flex-end;
  align-items: baseline;
}
```

---

## 📊 8. Quick Summary Table

| **Property**      | **Description**         | **Example**                |
| ----------------- | ----------------------- | -------------------------- |
| `color`           | Sets text color         | `color: blue;`             |
| `font-size`       | Controls text size      | `font-size: 18px;`         |
| `margin`          | Space outside border    | `margin: 10px;`            |
| `padding`         | Space inside border     | `padding: 15px;`           |
| `border`          | Border styling          | `border: 2px solid black;` |
| `position`        | Element positioning     | `position: absolute;`      |
| `display`         | Changes layout type     | `display: flex;`           |
| `flex-direction`  | Direction of flex items | `flex-direction: row;`     |
| `justify-content` | Horizontal alignment    | `justify-content: center;` |
| `align-items`     | Vertical alignment      | `align-items: center;`     |

---

## ✨ Final Tips

- Understand the **box model** first — it's the foundation.
- Use **flexbox** for modern, responsive layouts.
- Combine **margins, paddings, and borders** smartly for perfect spacing.
- Practice by building small **UI components** like cards, navbars, and grids.
