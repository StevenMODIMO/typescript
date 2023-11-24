"use strict";
// arrays
let names = ["Steven", "Peter", "Modimo"];
let ages = [1, 2, 3, 4, 45, 6, 77];
names.pop();
names.push("Biko"); // place an item at the end od the array
names.shift(); // remove the first item from an array
names.unshift("Huncho"); // adds item at the begining of the array
// type inference with arrays
let con = ["rain", "snow", "sleet", "hail", "clear"];
let things = ["Name", 1, true];
// object literals
let user = {
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
function add(items) {
    const total = items.reduce((a, c) => a + c, 1);
}
add([1, 2, 3]);
// type inference with functions
function greet(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = greet("Marion", "Hello");
// any type
let anything;
anything = "Steven";
console.log(anything);
let arr;
arr = ["Steven", "Modimo"];
console.log(arr);
// array in typescript is a collections of values of a single type in no specific order
// tuple in typescript is a collection of values of different types in specific order
// tuples
let person = ["Mario", 2, false];
let hsla = [200, "100%", "50%", 1];
function cords() {
    const lat = 2.1;
    const lon = 40;
    return [lat, lon];
}
const [lat, lon] = cords();
console.log(lat, ",", lon);
/// names tuples
let use;
use = ["peach", 2];
const me = {
    author: "Ben Carson",
    author_id: 1,
    book_name: "Gifted Hands",
    book_id: 23,
};
// as function argument types
function myPost(post) {
    console.log(post);
}
myPost({
    title: "Biko",
    body: "How to learn",
    tags: ["books", "reading", "hobbies"],
    created_at: new Date(),
});
// with arrays
let posts = [];
posts.push(me);
console.log(posts);
