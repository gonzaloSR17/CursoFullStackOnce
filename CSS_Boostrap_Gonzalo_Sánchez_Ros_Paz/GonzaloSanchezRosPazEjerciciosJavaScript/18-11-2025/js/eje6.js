// creacion de array
const car = {type:"Fiat", model:"500", color:"white"}

// Cambiar...
car.color = "red";

// Añador una propiedad
car.owner = "Johnson";

//Display the property
document.getElementById("demo").innerHTML = "Car owner is " + JSON.stringify(car)