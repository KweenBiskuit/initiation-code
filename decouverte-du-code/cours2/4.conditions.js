// A. Simple condition
/* if(condition) { instructions } */
var stock = 10;
if (stock < 15) {
  console.log("should buy new stuff");
}

// B. Condition with fallback
/* 
  if(condition) { instructions } 
  else { isntructions }
*/
var price = 30;
if (price > 20) {
  console.log("too expensive");
} else {
  console.log("can buy this stuff");
}

// C. Complexe conditions
/* 
  if(condition) { instructions } 
  else if (another condition) { instructions }
  else { isntructions }
*/
var color = "blue";
if ((color = "red")) {
  console.log("like a apple");
} else if ((color = "green")) {
  console.log("like a leave");
} else {
  console.log("its not green nor red");
}

// -----------------------------------

/* Exercice 1 - write an simple if condition
  var color = 'green';
  if color equal green, log 'you can pass'

   play with 'color' value
*/

/* Exercice 2 - write an simple if condition
  var color = 'red';
  if color different from red, log 'you can pass'

  play with 'color' value
*/

/* Exercice 3 - write an if/else condition
  var password = '1234';
  if password equal '1234' log 'not secure', else log 'password accepted' 

  play with 'password' value
*/

/* Exercice 4 - write an if / else if / else algo
  var nationality = 'french'; var job = 'singer';

  if nationality equal 'french' and job equal 'painter', log 'Toulouse Lautrec'
  else if nationality equal 'french' and job equal 'singer', log 'Georges Brassens'
  else if nationality equal 'belgium' and job equal 'singer', log 'Jacques Brel'
  else log 'the artist was not found'

  play with 'nationality' and 'job' values
*/

/* Exercice 5 - write an if / else if / else algo
  Write an algo with the following result for var age;
  age greater or equal 18, log isAdult
  age between 13 and 17, log teen
  age below 13, log child

  play with 'age' values
*/
