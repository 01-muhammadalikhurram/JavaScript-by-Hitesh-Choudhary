// Object - Part 1

// literal
// constructor
// singleton => by constructor
// Object.create => some other way to create an object


// object literals

const my_sym = Symbol("key 1")
const js_user = {
    name: "Muhammad Ali",
    age: 21,
    "location": "pattoki",
    email: "anyone@gmail.com",
    is_logged_in: false,
    last_logged_in: ["Monday", "Saturday"],
    [my_sym]: "my key 1",
    my_sym: "my key 2"

}
// console.log(js_user.email); //some method to access an attribute
// console.log(js_user["email"]); //another method to access an attribute
// console.log(js_user.my_sym);
// console.log(js_user[my_sym]);

js_user.email = "anyone@CharacterData.com"
// console.log(js_user["email"]);

// Object.freeze(js_user) //freezes an object so no manipulation can accur

js_user.email = "anyone@gmail.com"
// console.log(js_user["email"]); 

// console.log(js_user);

js_user.greeting = function(){
    console.log("Hi! user");
}
// console.log(js_user.greeting());

js_user.greeting2 = function(){
    console.log(`Hi! user, ${this.name}`);
}
console.log(js_user.greeting2());