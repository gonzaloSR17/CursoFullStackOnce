// ============ 1.-  VARIABLES GLOBALES ============
        // Obtener refenrecia al ellemento canvas del html
        const canvas = document.getElementById('gameCanvas');

        // Obtener el contexto 2D para poder dibujar en el canva (X, Y) No hay profundidad
        const ctx = canvas.getContext('2d');

        // Variable para controlar si el juego esta en ejecucion
        let gameRunning = false;

        //Puntuacion del jugador (incrementa al destruir enemigo)
        let score = 0;

        // Número de vidas del jugador
        let lives = 3;

        // Nivel actual del juego
        let level = 1;

        // Objeto que representa la nave del jugador
        let player = {
            x: canvas.width / 2 - 25, // Posicion horizontal (centrada)
            y: canvas.height - 60, // Posicion vertical (cerca del fondo)
            width: 50, // Ancho de la nave
            height: 40, // Alto de la nave
            speed: 5 // Velocidad de movimienro en píxeles
        }

        // Arrays (listas) para almacenar mñultiples elementos
        let enemies = []; // Lista de todos los enemigos
        let bullets = []; // Lista de disparos del jugador
        let enemyBullets = []; // ista de disparos de los enemigos

        // Objeto para rastrear que teclas están presionados
        let keys = {
            left: false, // Flecha izquierda
            right: false, // Flecha derecha
            space: false // Barra espaciadora
        };

        // ============== 2.- FUNCOPN PARA CREAR SONIDO DE DISPARO ==============
        // Esta función genera un sonido sintetico usando la Web Audio API
        // No necesita archivos de audio externos
        function playShootSound() {
            // Crear un contexto de audio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Crea un oscilador (genera ondas de sonido)
            const oscillator = audioContext.createOscillator();

            // Crear un nodo de ganancia (control el volumen)
            const gainNode = audioContext.createGain();

            // Conectar oscilador -> ganancia -> salida de audio
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination)

            // Configurar la frecuencia del sonido (440Hz = nota La)
            oscillator.frequency.value = 440;
            // Tipo de onda cuadrada (sonido retro de videojuegos)
            oscillator.type = 'square';

            // configurar el volumen inicial en 0.3
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

            //Hacer que el volumen baje rapidamente (efecto de disparo)
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            // Iniciar el sonido inmediatamente
            oscillator.start(audioContext.currentTime);
            // Detener el sonido despues de 0.1 segundos
            oscillator.stop(audioContext.currentTime + 0.1);
        }


        // =========== FUNCION PARA CREAR ENEMIGOS ======================
        // Esta funcion crea una cuadricula de enemigos al inicio de cada nivel
        function createEnemies() {
            // Vaciar el arrray de enemigos (importante para empezar un nuevo nivel)
            enemies = [];

            // Configuracion de la cuadricula de enemigos 
            let rows = 3; // Numero de filas de enemigos
            let cols = 8; // Numero de columnas de enemigos
            let enemyWidth = 40; // Ancho de cada enemigo
            let enemyHeight = 30; // Alto de cada enemigo
            let spacing = 60; // Espacio entre enemigos
            let startX = 100; // Posicion X inicial
            let startY = 50; // Posicion Y inicial

            // BUCLE para recorrer cada fila
            // 
            for (let row = 0; row < rows; row++) {
                // BUCLE FOR interno: Recorre cada columna dentro de la fila actual
                for (let col = 0; col < cols; col++) {
                    // Crea un enemigo y añadirlo al array
                    enemies.push({
                        // Calcular posicion X: posicion inicial + (numero de columna * espacio)
                        x: startX + col * spacing,
                        // Calcular posicion Y: posicion inicial + (numero de fila * espacio)
                        y: startY + col * spacing,
                        width: enemyWidth,
                        height: enemyHeight,
                        alive: true,
                        type: row // el tipo depende de la fila (0,1 o 2)

                    });
                    // 
                }
            }

            // Al finalizar, tendremos 3 filas x 8 columnas = 24 enemigos

        }

        // ¿======== FUNCION PARA DIBUJAR LA NAVE ===================
        // Esta funcion dibuja la nave del jugador en su posicion actual
        function drawPlayer() {
            // Establecer el color de relleno en verde brillante
            ctx.fillStyle = '#00ff00'

            // Dibujs el cuerpo principal de la nave (rectangulo vertical)
            // fillReact(x, y, ancho, alto)
            ctx.fillRect(player.x + 15, player.y, 20, 30);

            // Dibujar las alas de la nave (rectangulo horizontal)
            ctx.fillRect(player.x, player.y + 20, 50, 10);

            // Cambia el color de la cabina
            ctx.fillStyle = '#00ccff'
            // Dibujar la cabina (pequeño rectangulo azul)
            ctx.fillRect(player.x + 20, player.y + 5, 10, 10);
        }


        // =========== FUNCION PARA DIBUJAR ENEMIGOS =================
        // Esta funcion recorre todos los enemigos y dibuja los que estan vacios
        function drawEnemies() {
            // BUCLE for: Recorre el array de enemifos
            // empieza en 0 y va hasta el ultimo indice (enemies.lenght - 1)
            for (let i = 0; i < enemies.length; i++) {

                // SOLO DIBUJAMOS SI EL ENEMIGO ESTA VIVO
                if (enemies[i].alive) {

                    switch(enemies[i].type) {
                        case 0:
                            ctx.fillStyle = '#ff0000'
                        break;
                        case 1:
                            ctx.fillStyle = '#ff6600'
                        break;
                        case 2:
                            ctx.fillStyle = '#ffff00'
                        break;
                        default:
                            ctx.fillStyle = '#ffffff'

                    }
                    
                    // Dibujar el cuerpo de enemigo
                    ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
                    
                    //Dibujar el ojo izquierdo
                    ctx.fillRect(enemies[i].x + 8, enemies[i].y + 10, 8, 8);
                    // Dibujar el ojo derecho
                    ctx.fillRect(enemies[i].x + 24, enemies[i].y + 10, 8, 8);


                }
            }
        }

        // ================= FUNCION para DIBUJAR DISPAROS =====================
        function drawBullets() {
            // Disparo del jugador en color verde
            ctx.fillRect = '#00ff00';

            // BUCLE FOR: Recorrer todos los disparos del jugador
            for (let i = 0; i < bullets.length; i++) {
                // Dibujar cada disparo como un pequeño rectangulo vertical
                ctx.fillRect(bullets[i].x, bullets[i].y, 4, 10);
            }

            // Disparos de los enemigos en color rojo
            ctx.fillStyle = '#ff0000';
            // BUCLE FOR: Recorta todos los disparos enemigos
            for (let i = 0; i < enemyBullets.length; i++) {
                ctx.fillRect(enemyBullets[i].x, enemyBullets[i].y, 4, 10);
            }
        }




