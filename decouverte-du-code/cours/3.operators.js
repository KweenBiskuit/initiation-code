// A. Operateur de calcul
// + - / *

// B. operateur comparaison
/*
 equal == 
 not equal !=
 greater than >
 greater than or equal >=
 less than <
 less than or equal <=
*/

// C. AND / OR
/*
  AND : condition1 && condition2
  OR : condition1 || condition2
*/

var and1 = true && true;
var and2 = true && false;
var and3 = false && false;
var and3 = false && true;

var or1 = true || true;
var or1 = true || false;
var or1 = false || false;
var or4 = false || true;

// D. Combining
/*
  var country = "France";
  var age = 19;
  var isFrenchAdult;
*/

// -----------------------------------

/* Exercice 1 - operateur comparaison
  correct following expressions so that all results are true 
  changing only the left end of the expression
*/
var resultB = 37 > 37;
var resultA = "pim" != "pim";
var resultD = 15 >= 50;
var resultE = 50 < 50;

/* Exercice 2 - AND / OR
  correct following expressions so that all results are true 
  without changing the operator
*/
var resultF = true && false;
var resultG = false || false;
var resultH = false && true;
var resultI = "max" != "max" && true;