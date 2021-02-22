
/** @file - this webpage gives greetings
 * @author - Mike Mike
 */

/** @var {method} today
 * @var {method} hourNow
 * @var {string} greeting
 */
var today = new Date();
var hourNow = today.getHours();
var greeting;


/** @function timeOfDay
 * @param {string} greeting - This gives greetings based of time
 */
function timeOfDay(greeting){
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
   greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
return greeting;

}
/** @description - this will print greeting */
document.write(`<h3>${timeOfDay()}</h3>`);
