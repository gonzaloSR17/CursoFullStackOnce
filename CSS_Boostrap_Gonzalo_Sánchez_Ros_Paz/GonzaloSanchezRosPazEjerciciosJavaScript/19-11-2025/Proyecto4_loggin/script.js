// Creamos un array para usuarios y contraseñas

const formRegistro = document.getElementById('formRegistro');

// Escuchar el evento....

// formulario para registrase

formRegistro.addEventListener('submit', function(event){

    // Evita que se recarge la pagina
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const usuario = document.getElementById('user-register').value;
    const pass = document.getElementById('pass-register').value;

    // Guardar los datos localmente con LocalStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('password', pass);

    // Si no existe, inicializar como un array vacio
    let usuarios = localStorage.getItem('usuarios');

    if (usuarios == null) {
        usuarios = [];
    } else {
        usuarios = JSON.parse(usuarios) // convertir texto a array
    }

    // Crea un objeto con los datos del nuevo usuario
    const nuevoUsuario = {
        usuario: usuario,
        password: pass
    };

    // Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    // Guarda el array utilizando en localStorage (convertido a texto)
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar mensaje de confirmacion
    const mensajeRegistro = document.getElementById('mensajeRegistro');
    mensajeRegistro.textContent = 'Usuario registrado correctamente  ' +usuarios.length;;
    mensajeRegistro.classList.remove('d-none'); // Mostrar el menaje

    formRegistro.reset();
    }
);

// formulario para loggin

formLoggin.addEventListener('submit', function(event) {
    
    // Evita que la pafina se carge
    event.preventDefault();
    
    // obtener los datos guardados en localStorage
    const usuarioIngresado = document.getElementById('user-loggin').value;
    const passwordingresado = document.getElementById('pass-login').value;

    // obtener los datos guardados en LocalStorage
    const usuarioGuardado = localStorage.getItem('usuario');
    const passwordGuardado = localStorage.getItem('password');

    // obtener el elemento del mensaje de error
    const mensajeError = document.getElementById('mensajeError');

    // Comparar los datos ingresados con los guardados
    if (usuarioIngresado == usuarioGuardado && passwordingresado == passwordGuardado) {
        // Si los datos son correctos, refirigir a Google
        window.location.href = 'https://www.google.com';
    } else {
        // Si los datos son incorrectos, mostrar mensaje de error
        mensajeError.classList.remove('d-none'); // Mostrar el parrafo rojo

        //Opcional: ocultar el mensaje después de 3 segundos
        setTimeout(function (){
            mensajeError.classList.add('d-none');
        }, 3000);
    }

})



// const userList = [];
// const userPass = [];

// function crearUser() {
//     userList.push(document.getElementById(user-register));
//     userList.push(document.getElementById(pass-register));
//     return true;
// }

