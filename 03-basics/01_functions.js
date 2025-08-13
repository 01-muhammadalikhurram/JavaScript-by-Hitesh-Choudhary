// Functions - Part 1

// say_my_name("Muhammad Ali")

function say_my_name(name){
    console.log(`Hello! ${name}`);   
}

function add_two_numbers(num1, num2){
    return num1+num2
}
// console.log(add_two_numbers(1, 2));

function login_user_message(username = 'sam'){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(login_user_message());
// console.log(login_user_message("Muhammad Ali"));

// Functions - Part 2

function calculate_cart_price(val1, val2, ...num1){ //... operator => ... operator is used as spread operator in some cases and as rest operator in some places
    return num1
}

// console.log(calculate_cart_price(100,200,3000));

const user = {
    username: "hitesh",
    price: 199
}

function handle_object(any_object){
    console.log(`username is ${any_object.username} and price is ${any_object.price}`);
    
}

// handle_object(user)

// handle_object({
//     username: "sam",
//     price: 999
// })

const arr = [200, 400, 100, 600]
function return_second_value(get_array){
    return get_array[1]
}

// console.log(return_second_value(arr));

//also understood about scope