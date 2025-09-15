/*
👉 The `filter` Method

The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

Example:-

const students = [
  { name: "Aman", marks: 85 },
  { name: "Raj", marks: 40 },
  { name: "Neha", marks: 90 },
];

const passed = students.filter((student) => student.marks >= 50);

console.log(passed);
// [{name: "Aman", marks: 85}, {name: "Neha", marks: 90}]

Example:-

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filterBooks = books.filter(
  (book) => book.genre === "Fiction" && book.edition > 2005
);

console.log(filterBooks); // [{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 }];
*/
