const user = {
    username: "hitesh",
    price: "999",

    welcome_message: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}

// user.welcome_message()

// user.username = 'sam'

// user.welcome_message()

// console.log(this);

// global object inside a browser is window

// const chai = function (){
//     console.log(this);
// }

// chai()


// const chai = () => {
//     let username = 'hitesh'
//     console.log(this.username);
    
// }
// chai()

// pure arrow function
// () => {}
// we can also hold it in a variable as
// const add_two = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add_two(3, 4));

// implicit return
const add_two = (num1, num2) => num1 + num2 //only if function is one line no need to use return keyword
console.log(add_two(3, 4));
