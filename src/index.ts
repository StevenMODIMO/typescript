// arrays

let names: string[] = ["Steven", "Peter", "Modimo"];

let ages: number[] = [1, 2, 3, 4, 45, 6, 77];

names.pop();
names.push("Biko"); // place an item at the end od the array
names.shift(); // remove the first item from an array
names.unshift("Huncho"); // adds item at the begining of the array

// type inference with arrays

let con = ["rain", "snow", "sleet", "hail", "clear"];

let things = ["Name", 1, true];

// object literals

let user: { name: string; age: number; online: boolean } = {
  name: "Steven",
  age: 22,
  online: true,
};

user.name = "Modimo";

// type inference with object literals

let persons = {
  name: "Luigi",
  score: 35,
};

// functions

function add(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 1);
}

add([1, 2, 3]);

// type inference with functions

function greet(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

const result = greet("Marion", "Hello");

// any type

let anything: any;

anything = "Steven";
console.log(anything);

let arr: string[] | number[];

arr = ["Steven", "Modimo"];
console.log(arr);

// array in typescript is a collections of values of a single type in no specific order
// tuple in typescript is a collection of values of different types in specific order

// tuples

let person: [string, number, boolean] = ["Mario", 2, false];

let hsla: [number, string, string, number] = [200, "100%", "50%", 1];

function cords(): [number, number] {
  const lat = 2.1;
  const lon = 40;

  return [lat, lon];
}

const [lat, lon] = cords();

console.log(lat, ",", lon);

/// names tuples

let use: [name: string, id: number];

use = ["peach", 2];

// Interface (allows developers to define certain structure of an object, array or any data type)

// Interfaces

interface Author {
  author: string;
  author_id: number;
  book_name: string;
  book_id: number;
}

const me: Author = {
  author: "Ben Carson",
  author_id: 1,
  book_name: "Gifted Hands",
  book_id: 23,
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
}

// as function argument types

function myPost(post: Post): void {
  console.log(post);
}

myPost({
  title: "Biko",
  body: "How to learn",
  tags: ["books", "reading", "hobbies"],
  created_at: new Date(),
});

// with arrays

let posts: Author[] = []

posts.push(me)

console.log(posts)