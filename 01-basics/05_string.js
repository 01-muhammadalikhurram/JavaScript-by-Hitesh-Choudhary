const name = "Muhammad Ali"
const repoCount = 4

// console.log(name + repoCount + " Value")

// console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);

const game_name = new String('Fox One')
// console.log(game_name);
// console.log(game_name[0]);
// console.log(game_name.__proto__);
// console.log(game_name.length);
// console.log(game_name.toLowerCase());
// console.log(game_name.toUpperCase());
// console.log(game_name.charAt(2));
// console.log(game_name.indexOf('o'));

const new_str = game_name.substring(0, 5)
// console.log(new_str);

const another_string = game_name.slice(-4, 2)
// console.log(another_string);

const trim = "                        Muhammad Ali                 "
// console.log(trim.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20', '-'));

// console.log(url.includes("esh"));

// console.log(game_name.split(' '));

console.log(game_name.small());

