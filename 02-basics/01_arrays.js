// Arrays - Part 1
const my_arr = [0, 1, 2, 3, 4, 5]
// console.log(my_arr[0]);

const str_arr = ["abc", "cde", "efg"]
// console.log(str_arr[1]);

const my_arr_2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

const numbers = [1,2,3,4,5] //talked about some prototype

// methods of an Array
my_arr.push(7)
my_arr.push(6)
// console.log(my_arr);

my_arr.pop()
// console.log(my_arr);

my_arr.unshift(9)
// console.log(my_arr);

my_arr.shift()
// console.log(my_arr);

// console.log(my_arr.includes(9));

// console.log(my_arr.indexOf(3));

const new_arr_3 = my_arr.join()
// console.log(my_arr);
// console.log(typeof new_arr_3);

//slice and splice
// console.log("A", my_arr);

const myn1 = my_arr.slice(1, 3) //Doesn't manipulate original
// console.log(myn1);
// console.log("B", my_arr);

const myn2 = my_arr.splice(1, 3) //manipulate original
// console.log("Splice: ", myn2);
// console.log("Original: ", my_arr);

// Arrays - Part 2
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //manipulates original array

const all_heros = marvel_heros.concat(dc_heros) //return new array

// console.log(all_heros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// Making an unusable array a usable array by using flat
const unusable_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(unusable_array);

const usable_array = unusable_array.flat(2)
// const usable_array = unusable_array.flat(Infinity) //infinity can also be used or any other larger number
// console.log(usable_array);

// Some more usable functions
// console.log(Array.isArray("Muhammad Ali"));
// console.log(Array.from("Muhammad Ali")); // converts into an array
// console.log(Array.from({name: "Muhammad Ali"})); // intersting case, making an array out of keys

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); //Converts multiple variables into a single array
