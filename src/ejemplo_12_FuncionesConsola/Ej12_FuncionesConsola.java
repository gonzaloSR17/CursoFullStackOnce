package ejemplo_12_FuncionesConsola;

// Importamos la cosolai
import utilidades.Consola;

public class Ej12_FuncionesConsola {

    // SESS
    static void sumar() {
    	int num1 = Consola.leerEntero("Introduce el numero 1");
        int num2 = Consola.leerEntero("Introduce el numero 2");
        int resultado = num1+num2;
        Consola.escribir("El resultado es " +resultado);
    }

    // SECS
    static void restar() {
        int num1 = Consola.leerEntero("Introduce el numero 1");
        int num2 = Consola.leerEntero("Introduce el numero 2");
        int resultado = num1-num2;
        Consola.escribir("El resultado es " +resultado);         // Con salida es obligatorio
    }

    // CESS
    static void multiplicar(int num1, int num2) {
        int resultado = num1 * num2;
        System.out.println(resultado);
    }

    // CECS
    static void dividir (int num1, int num2) {
        double resultado = (double)num1/num2;   // Explicito
        System.out.println(resultado);
    }
    
    static void calculadora() {
    	 String mensaje = " -- MENU PRINCIPAL -- \n" +
                 " 1. Sumar \n" +
                 " 2. Restar \n" +
                 " 3. Multiplicar \n" +
                 " 4. Dividir \n" +
                 " 5. Salir \n";
 System.out.println(mensaje);
 int opcion = 4;
 
 // Según la opción, entramos en cada caso...
 switch (opcion) {
     case 1: sumar();                                    break;
     case 2: restar();            break;
     case 3: 
     int num1 = Consola.leerEntero("Introduce el numero 1");
     int num2 = Consola.leerEntero("Introduce el numero 2");
     multiplicar(num1, num2);
     break;
     case 4: 
     int numA = Consola.leerEntero("Introduce el numero 1");
     int numB = Consola.leerEntero("Introduce el numero 2");
     dividir(numA, numB);
     break;
     case 5: System.out.println("Salir");                break;
     default: System.out.println("Opción Incorrecta!");  break;
 }
    }

    public static void main(String[] args) {
       calculadora();
    }
}