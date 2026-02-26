package utilidades;

import java.util.Scanner;

public class Consola {
	
	// Scanner para numeros
	private static final Scanner consola = new Scanner(System.in);
	
	//  Scanner para cadenas
	private static Scanner texto = new Scanner(System.in);
	
	// metodos
	
	// Escritura por consola
    public static void escribir (String mensaje) {
        System.out.println(mensaje);
    }
    
    public static int leerEntero (String mensaje) {
        escribir(mensaje);
        return consola.nextInt();
    }
    
    public static float leerFloat (String mensaje) {
        escribir(mensaje);
        return consola.nextFloat();
    }
    
    public static double leerDouble (String mensaje) {
        escribir(mensaje);
        return consola.nextDouble();
    }
    
    public static boolean leerBoolean (String mensaje) {
        escribir(mensaje);
        return consola.nextBoolean();
    }

 // Lectura de String 
    public static String leerString (String mensaje) {
        escribir(mensaje);
        String cadena = texto.nextLine();
        return cadena;
    }
    
    

}
