const score = 400
// console.log(typeof score);

const balance = new Number(100)
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const precision = 23.593945999999888888888886666666666
// console.log(precision.toPrecision(4));

const hundreds = 10000000000
// console.log(hundreds.toLocaleString('en-PK'));

// console.log(Number.EPSILON);
// console.log(Number.MAX_SAFE_INTEGER); 
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);
// console.log(Number.POSITIVE_INFINITY);

// ++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(-3.65));
// console.log(Math.ceil(3.15));
// console.log(Math.floor(3.65));
console.log(Math.random()*1);
console.log((Math.random()*10).toPrecision(3));
console.log(Math.random()*100); 

const max = 20
const min = 10
range = (max - min + 1) + min

console.log(Math.floor(Math.random() * range));
