let a = 100
{
    //curly braces is the scope
    // defines the scope of a variable
    let a = 10
    var b = 20
    const c = 30
    d = 40
    console.log("Inner: ", a);
    
}

console.log(b) // the problem is with scope of var as it is global
console.log(d) // the problem is with scope of this variable as it is global
console.log("Outer: ", a);
