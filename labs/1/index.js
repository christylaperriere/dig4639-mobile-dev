//require Adder.js file
const Adder = require("./Adder.js"); 

//instance of the adder class
const adder = new Adder({a: 6, b: 4}); 

//printing results to the console
console.log(adder.render() ); 
