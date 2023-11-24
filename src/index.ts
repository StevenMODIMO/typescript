// arrays

let names: string[] = ['Steven', 'Peter', 'Modimo']

let ages: number[] = [1,2,3,4,45,6,77]

names.pop()
names.push('Biko') // place an item at the end od the array
names.shift() // remove the first item from an array
names.unshift('Huncho') // adds item at the begining of the array

// type inference with arrays

let con = ['rain', 'snow', 'sleet', 'hail', 'clear'];

const cons = con.slice(1,3)

console.log(cons)

// object literals

// type inference with object literals