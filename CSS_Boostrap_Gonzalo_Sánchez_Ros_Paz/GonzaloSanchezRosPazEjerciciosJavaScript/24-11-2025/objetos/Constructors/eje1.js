// Constructor de objetos..

function Person(first, last, age, eye) {
    this.firstname = first
    this.last = last
    this.age = age
    this.eye = eye
}

// Constructor de persona

const myFather = new Person("John","Doe",50,"blue")

console.log(myFather);