// Scope - Part 1

let a = 100
{
    //curly braces is the scope
    // defines the scope of a variable
    let a = 10
    var b = 20
    const c = 30
    d = 40
    // console.log("Inner: ", a);
    
}

// console.log(b) // the problem is with scope of var as it is global
// console.log(d) // the problem is with scope of this variable as it is global
// console.log("Outer: ", a);

// Scope - Part 2 => Nested Scope 
//talked something about closure

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    
    two()
} 

// one()

if(true){
    const username = 'hitesh'
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++intersting+++++++++++++++++++++++++++++
console.log(add_one(5))
function add_one(num){
    return num + 1
}

const add_two = function(num){
    return num + 2
}
console.log(add_two(6));