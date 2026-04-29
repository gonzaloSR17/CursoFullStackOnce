const peso = 75;
const altura = 1.75;
const imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("te vas a morir");
} else if (imc > 18.5 && imc < 25) {
    console.log("estas bien");
} else if (imc > 25 && imc < 30) {
    console.log("estas gordillo");
} else {
    console.log("estas rellenito");
}


