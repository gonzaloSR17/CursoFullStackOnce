const btnWeb1 = document.getElementById("botonEje1");
const btnWeb2 = document.getElementById("botonEje2");

const txtWeb = document.getElementById("textoEje");

btnWeb1.addEventListener('click', () => {
    txtWeb.style = ""
    txtWeb.style = "color: black;"
})

btnWeb2.addEventListener('click', () => {
    txtWeb.style = ""
    txtWeb.style = "color: white; background-color: black"
})

