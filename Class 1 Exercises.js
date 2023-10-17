// Donna Quach, JavaScript 310B, Autumn 2023
// Class 1 Exercises 

/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

let radiusSmall = 13 / 2; // radius = 6.5 in
let radiusLarge = 17 / 2; // radius = 8.5 in 

let pizzaAreaSmall = Math.PI*(radiusSmall**2); // Must be capital "M" for Math and "PI" for Pi
let pizzaAreaLarge = Math.PI*(radiusLarge**2); // MUST use "*" when multiplying even with parentheses!

console.log("The area of the 13-inch pizza is " + pizzaAreaSmall + " square inches."); 
console.log("The area of the 17-inch pizza is " + pizzaAreaLarge + " square inches.");



// 2. What is the cost per square inch of each pizza?
let smallPizzaPrice = 16.99;
let largePizzaPrice = 19.99;

let costPerSquareInSmall = smallPizzaPrice / pizzaAreaSmall;
let costPerSquareInLarge = largePizzaPrice / pizzaAreaLarge;

console.log("Cost per square inch small pizza is " + costPerSquareInSmall);
console.log("Cost per square inch large pizza is " + costPerSquareInLarge);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

// Source: https://www.w3schools.com/js/js_random.asp
// Math.floor is used in conjunction with Math.random(). Otherwise Math.random() on its own returns a number between 0 and 1.
// +1 is used to include the #1 as the lowest number to be returned (instead of 0) and #13 the highest number that could be returned.
// Because Math.floor(Math.random() * 13) only returns a number between 0 and 13 (and not including 13)
let randomCardNum = Math.floor(Math.random() * 13) + 1; 

console.log("Random card number is: " + randomCardNum); // For testing purposes 

// 4. Draw 3 cards and use Math to determine the highest
// card

let randomCardNum1 = Math.floor(Math.random() * 13) + 1; // Return first random card
let randomCardNum2 = Math.floor(Math.random() * 13) + 1; // Return second random card
let randomCardNum3 = Math.floor(Math.random() * 13) + 1; // Return third random card 

console.log("Card 1: " + randomCardNum1); // For testing purposes 
console.log("Card 2: " + randomCardNum2);
console.log("Card 3: " + randomCardNum3);

let highestCardNum = Math.max(randomCardNum1, randomCardNum2, randomCardNum3); 

console.log("Highest card number: " + highestCardNum); 

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = "Donna";
let lastName = "Quach";
let streetAddress = "111 First Street"; 
let city = "Olympia,";
let state = "WA";
let zipCode = "98511";

// Also added \n before name so that the name would line up with the lines for street address and city/state/zipcode 
let fullAddress = `\n ${firstName} ${lastName} \n ${streetAddress} \n ${city} ${state} ${zipCode}`;
console.log(fullAddress); 

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let addressString = `Donna Quach
                    111 First Street
                    Olympia, WA 98511`; 

let first_Name = "Donna"; 
let firstNameLength = first_Name.length; // Get length of first name 
console.log("First name length: " + firstNameLength); // "Donna" returns 5 

// First parameter of .slice() is starting index while second parameter is the # of positions (NOT ending index...put 5 not 4)
// i.e. 0 is starting index, 5 is the number of positions
let getFirstName = addressString.slice(0, firstNameLength); 
console.log("My first name is: " + getFirstName); 


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
//const endDate = new Date(2019, 3, 1);

// First parameter of new Date() = Year 
// Second parameter of new Date() = Index of Month (where January is 0)
// Third parameter of new Date() = Day 
const startDate = new Date(2020, 0, 1); 
console.log(startDate); // testing syntax of startDate, returns "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"

const endDate = new Date(2020, 3, 1); 
console.log(endDate); // testing syntax of endDate, returns "Wed Apr 01 2020 00:00:00 GMT-0700 (Pacific Daylight Time)"

let startDate_ms = startDate.getTime();
let endDate_ms = endDate.getTime();
console.log(startDate_ms); // Get # of milliseconds since January 1, 1970, for testing purposes
console.log(endDate_ms); 

let millisecondDiff = endDate_ms - startDate_ms; 
let millisecondMidPoint = millisecondDiff / 2; 
console.log("Time difference between dates is: " + millisecondDiff); // For testing purposes 
console.log("Halfway is: " + millisecondMidPoint); 

// Get number value of middle date in milliseconds 
let middleDate_ms = startDate_ms + millisecondMidPoint; 
console.log("Middle date MS: " + middleDate_ms); // For testing purposes 

// Convert number value of middle date into actual date 
// Sources: https://www.geeksforgeeks.org/how-to-convert-milliseconds-to-date-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
let middleDate = new Date(middleDate_ms);
console.log("Middle date and time is: " + middleDate.toString()); // not toDateString() because we want the time too 