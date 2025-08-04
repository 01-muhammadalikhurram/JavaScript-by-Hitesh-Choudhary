// Numbers Comparison
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

// Other Comparison
console.log("2" > 1)
console.log("02" > 1)

//Null Comparison => unpredictable
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//undefined comparison => always false
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//strict equality comparison
console.log("2" === 2);