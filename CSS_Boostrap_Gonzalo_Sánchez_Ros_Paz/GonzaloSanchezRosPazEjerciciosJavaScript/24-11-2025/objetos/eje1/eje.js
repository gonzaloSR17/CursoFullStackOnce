// Ejemplo 1 de creacion de tipo de objetos

// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Create an Object
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// ejemplo 2: 

// Create an Object
const person3 = {};

// Add Properties
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";


// ejemplo 3

// Create an Object
const person4 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});


// Ejemplo 4 con funcion y objeto
const presidente = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Propiedades del objeto
// Puede acceder a las propiedades de los objetos de dos maneras:

// objectName.propertyName
// objectName["propertyName"]


console.log(person3.firstName);
console.log(person4[lastname]);


// CONSTRUCTORES OBJETOS


