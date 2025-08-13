// say_my_name("Muhammad Ali")

// const { use } = require("react");

// function say_my_name(name){
//     console.log(`Hello! ${name}`);   
// }

// function add_two_numbers(num1, num2){
//     return num1+num2
// }
// console.log(add_two_numbers(1, 2));

function login_user_message(username = 'sam'){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(login_user_message());
console.log(login_user_message("Muhammad Ali"));
