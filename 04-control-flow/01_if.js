// if

// if (true) {
    
// }

// comparison operators => <, >, <=, >=, ==, !=, ===

const is_user_logged_in = true
// if (is_user_logged_in) {
//     console.log("executed");
// }

// if (2 == '2') {
//     console.log("executed");
// }

// if (2 !== '2') {
//     console.log("executed");
// }

// if (2 != '2') {
//     console.log("executed");
// }

// if (2 === '2') {
//     console.log("executed");
// }

const temperature = 41
// if (temperature < 50) {
//     console.log('temperature is less than 50');
// }
// else{
//     console.log("temperature is greater than 50");
// }

const score = 200
// if (score > 100) {
//     const power = 'fly'
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); => Error due to scope problem

const balance = 700
// if (balance < 500){ 
//     console.log("less than 500")
// }else if (balance < 750) {
//     console.log("less than 750")
// }else if (balance < 900) {
//     console.log("less than 900")
// }

const user_logged_in = true
const debit_card = true
const logged_in_google = false
const logged_in_email = true

// if (user_logged_in && debit_card) {
//     console.log("Allowed to buy course");
// }

// if (logged_in_email || logged_in_google) {
//     console.log("User Logged In");   
// }

// switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 //strings can also be used
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;

//     default:
//         break;
// }

//truthy values => always true
const user_email = 'hitesh.ai'
// if (user_email) {
//     console.log('got email');
// }else{
//     console.log('no email');
// }

// truthy values => true, "0", 'false', " ", [], {}, function(){} //empty function 
// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

const obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("empty object");
// }

// Nullish Coalescing Operator (??): null undefined
let val1 = 5 ?? 10
// console.log(val1);

// val1 = null ?? 10
// console.log(val1);

// val1 = undefined ?? 10
// console.log(val1);

var1 = undefined ?? 10
// console.log(var1);

var1 = null ?? 10
// console.log(var1);

var1 = 10 ?? undefined
// console.log(var1);

var1 = 10 ?? null
// console.log(var1);

// ternary operator
const ice_tea = 100
// ice_tea >= 80 ? console.log('less than 80') : console.log('more than 80');

