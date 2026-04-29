const formMoneda = document.getElementById('imc_moneda')

formMoneda.addEventListener('submit', function(event){

    // Evita que se recarge la pagina
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const moneda = document.getElementById('moneda').value;
    const altura = document.getElementById('altura').value;

    let tipo = "Moneda sin especificar";


    if (moneda == "100") {
        const imc = peso / (altura * altura)
        console.log(imc)


        switch (true) {
        case 1.75:
            tipo = "Moneda pequeña";
            break;
        case imc > 18.5 && imc < 25:
            tipo = "Moneda normal";
            break;
        case imc > 25 && imc < 30:
            tipo = "Moneda pesada";
            break;
        case imc > 30:
            tipo = "Moneda pesada y grande";
            break;
        }

        const mensajeError = document.getElementById('caja-mensaje')
        mensajeError.textContent = "💲 moneda de tipo: " +tipo;
        mensajeError.classList.add('alert-success');
        mensajeError.classList.remove('d-none');

    } else {
        const mensajeError = document.getElementById('caja-mensaje')
        mensajeError.textContent = "❌ ATENCION: Solo esta disponible la moneda de 100 centimos";
        mensajeError.classList.add('alert-danger');
        mensajeError.classList.remove('d-none');
    }


})

// if (moneda === "100 Centimos") {
//     console.log("entro");
// }
// 
/*
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



*/