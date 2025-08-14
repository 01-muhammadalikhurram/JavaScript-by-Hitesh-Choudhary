// Immediately Invoked Function Expression

// function chai(){
//     console.log('DB Connected');
// }

// chai()

(function chai(){ //to prevent from pollution because of global variables we use iife
    console.log('DB Connected');
})(); //semi colon, to explicitly end the code so it ends and the next starts

( (name) => console.log(`DB CONNECTED ${name}`) )('Hitesh');