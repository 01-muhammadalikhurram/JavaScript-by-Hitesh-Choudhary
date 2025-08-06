// Array
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
console.log("Splice: ", myn2);
console.log("Original: ", my_arr);
