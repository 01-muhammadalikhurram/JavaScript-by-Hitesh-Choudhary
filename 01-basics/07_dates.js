let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toJSON());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

let my_created_date = new Date(2025, 7, 5)
// console.log(my_created_date.toDateString());
// console.log(my_created_date.toLocaleString());

let my_new_created_date = new Date("05/08/2025")
// console.log(my_new_created_date.toLocaleDateString());

let my_time_stamp = Date.now()
// console.log(my_time_stamp);

// console.log(Math.floor(Date.now()/1000));

let new_date = new Date()
// console.log(new_date.getMonth() + 1);
// console.log(new_date.getDay());

console.log(new_date.toLocaleString('default', {
    weekday: "long"
}));