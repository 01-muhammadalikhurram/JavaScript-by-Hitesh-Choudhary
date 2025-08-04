/*
Video #6 - Datatype conversions
let score = undefined

// const {score} = req.body //something unrelated for now => don't know what it is

console.log(typeof score);
console.log(score);

let value_in_number = Number(score)

console.log(typeof value_in_number);
console.log(value_in_number);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let is_logged_in = 1
let boolean_is_logged_in = Boolean(is_logged_in)

console.log(boolean_is_logged_in);
console.log(is_logged_in);

//other conversions also possible
*/

//Video #7 - String to number conersion

let value = 3
let neg_val = -value
// console.log(neg_val)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Muhammad Ali"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(typeof (1 + 2 + "2"));

// console.log(true+)
// console.log(+true)
// console.log(true+true)
// console.log(+"")

// usage of prefix and postfix operator
let game_counter = 100
game_counter++
++game_counter