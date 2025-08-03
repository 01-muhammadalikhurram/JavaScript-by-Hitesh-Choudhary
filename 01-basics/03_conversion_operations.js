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