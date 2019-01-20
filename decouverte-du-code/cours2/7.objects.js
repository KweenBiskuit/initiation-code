// A. Objects
/*
  var objectname = {};
  var objectName = {
    prop1: value1,
    prop2: value2,
    ...
  }
  read 
    objectname.prop1 -> read the value incapsulate into prop1 (value1)
  write 
    objectname.prop2 = 'newValue2';  -> the property 'prop2' now contains the value 'newValue2'
  add new property
*/
var idCard = {
  firstname: "John",
  lastname: "Doe",
  idNumber: "OI6587120",
  birthplace: "Etterbeek"
};

console.log(idCard);
console.log(idCard.idNumber);
idCard.birthplace = "Ixelles";

// B. Objects & Arrays
/* 
  var obj1 = { ... }
  var obj2 = { ... }
  var obj3 = { ... }

  var arrayOfObjects = [obj1, obj2, obj3];

  while(counter < arrayOfObjects){
    log(arrayOfObjects[counter]) // log full object
    log(arrayOfObjects[counter].propA ) // log property propA 
  }
*/
var books = [
  { title: "les miserables", author: "victor hugo", price: 15 },
  { title: "ubik", author: "philip k dick", price: 12 },
  { title: "harry potter", author: "j k rowling", price: 18 }
];
console.log(books);

var counter = 0;
while (counter < books.length) {
  console.log(books[counter]); // log full object
  console.log(books[counter].title); // log property propA
}

// -----------------------------------

/* Exercice 1 - simple object
  - create an object dog, with this properties : 'name', 'breed', 'age', 'isAdopted'. Choose the values
  - log the property name
  - change the name to 'Rex'
*/

/* Exercice 2 - 
  - create another dog object name 'dog2'
  - create an array 'dogPension', with the two dogs object
  - log name of first dog in array 'dogPension'
  - change the age of the second dag in the array 'dogPension'
*/

/* Exercice 3 - array algo
  write an algo to find how many students have a note under or equal 10
*/
var classResults = [
  { firstName: "Jean", note: 8 },
  { firstName: "Marie", note: 19 },
  { firstName: "Tom", note: 11 },
  { firstName: "Elsa", note: 6 },
  { firstName: "Arthur", note: 10 }
];
