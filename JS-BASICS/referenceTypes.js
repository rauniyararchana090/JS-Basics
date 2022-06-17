//there are 3  reference type:  Object,Array and Function
//Declaring Object in js
let person ={
    name:'Archana',
    age:22
};
console.log(person);
//Dot Notatiom
person.name= 'Rauniyar';
console.log(person.name)
//Bracket Notation
person['name']= 'Mary';
console.log(person['name'])

//Declaing Array in js, obects as well as size of array are dynamic
let selectedColors = ['red','blue'];
console.log(selectedColors);
//Accessing 1st element of array
console.log(selectedColors[0]);
//appending value to array
selectedColors[2]='green';
console.log(selectedColors);
//different types of alue can store in array
selectedColors[3]=1;
console.log(selectedColors);
console.log(selectedColors.length);


//Function in array
function greet(name,lastName){
    console.log('Hello World ' + name + ' '+ lastName);
}
greet('Archana','Shah');
greet('Rauniyar','Ram');

//calculation a value
function square (number){
    return number*number;
}
let number = square(9)
console.log(number)



