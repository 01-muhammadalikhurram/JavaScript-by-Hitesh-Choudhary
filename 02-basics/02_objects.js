// Object - Part 1 - Object Literals

// literal
// constructor
// singleton => by constructor
// Object.create => some other way to create an object


// object literals

const my_sym = Symbol("key 1")
const js_user = { // non - singleton object
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
// console.log(js_user.greeting2());

// Object - Part 2 - singleton - constructor
const tinder_user = new Object() // singleton object

// console.log(tinder_user);

tinder_user.id = "123abc"
tinder_user.name = "sam"
tinder_user.is_logged_in = false

// console.log(tinder_user);

const regular_user = {
    email: "some@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Muhammad",
            last_name: "Ali"
        }
    }
}

// console.log(regular_user);
// console.log(regular_user.full_name);

//optional chaining
// console.log(regular_user.full_name?.user_full_name);
// console.log(regular_user.full_name?.user_full_name.first_name);

// combining objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2} // bad method // wrong method
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} //using spread operator
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// const any_user = {...js_user, ...tinder_user}
// console.log(any_user);

const any_user = Object.assign({} /**target */, tinder_user /**source */, js_user /**source */)
// console.log(any_user);

const users = [
    {
        id: 1,
        email: "h@mail.com"
    },
    {
        id: 2,
        email: "h@mail.com"
    }
]
// console.log(users[1].email);

// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));

// console.table([Object.keys(tinder_user), Object.values(tinder_user)])

// console.log(Object.entries(tinder_user));

// console.log(tinder_user.hasOwnProperty("is_logged_in"));
