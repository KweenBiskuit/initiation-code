// A. Array
/*
  var arrayName = [];
  array start at index 0
  read : 
    arrayName[0] -> read the first element of the array
  write :  
    arrayName[2] = 'value' -> put 'value' at index 2 of array
*/
var grades = [12, 11, 9, 18, 17, 20];

var fruits = ["apple", "ananas", "cherry", "raspberry", "banana"];
console.log(fruits[0]);
console.log(fruits[2]);

fruits[4] = "coconut";

console.log(fruits);

// B. Methodes
/*
  arrayName.length -> size of the array
  arrayName.push(value) -> add value at the last index of the array
  arrayName.pop() -> remove the last element of the array
  ... etc
*/
var size = fruits.length;
console.log("size", size);

fruits.push("mango");
console.log(fruits, size);

// C. Array & loops
/* READ
  var counter = 0;
  var arrayName = [value1, value2, value3]
  while(counter < arrayName.length){
    console.log(arrayName[counter])   // counter incrementation
    counter++;
  }
*/
var start = 0;
var arrayName = ["chocolate", "vanilla", "lime", "almond milk"];
while (start < arrayName.length) {
  console.log(arrayName[start]); // counter incrementation
  start++;
}

/* WRITE
  var counter = 0;
  var arrayName = [value1, value2, value3]
  while(counter < arrayName.length){
    arrayName[counter] = newValue
    counter++;
  }
 */
while (start < arrayName.length) {
  arrayName[start] = "no more fruit";
  start++;
}

// -----------------------------------

/* Exercice 1 - simple array
  - create a array name weekDays, fill it with all the day of the week
*/

/* Exercice 2 - log & replace
  - log 'wednesday' using the index in the weekDays array
  - replace the 5th element to 'FRI-YAY' using the index in weekDays array
  (keep in mind the position and index are different)
*/

/* Exercice 3 - loop 
  - log all days of the week using a while loop
*/

/* Exercice 4 - algo with array and while loop
  var movieReviews = ['good', 'bad', 'mediocre', 'good', 'good', bad, 'good'];
  - write an algo to find how many 'good' reviews this movie get
  - improve the algo to calculate which percentage the 'good' reviews represent
*/
