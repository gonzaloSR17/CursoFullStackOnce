package bloqueB;

import utilidades.Consola;

public class calculosCientificos {

	public static void imprimirMenu() {
			
			System.out.println("=================================");
			System.out.println("  CALCULOS, POTENCIAS, NUMEROS");
			System.out.println("=================================");
			System.out.println("1. Modulo");
			System.out.println("2. Potencia");
			System.out.println("3. Mayor que");
			System.out.println("4. Raiz Cuadrada");
			System.out.println();
			System.out.println("================================");
			ejecutarOpcion(Consola.leerEntero("Elige una opcion"));
			
		}

	public static void ejecutarOpcion(int n) {
		switch (n) {
		case 1:
			
			int sol = calcularModulo(Consola.leerEntero("Elige el primer numero"), Consola.leerEntero("Elige el segundo Numero"));
			
			System.out.println("La solucion del modulo es: " +sol);
			
			break;
		case 2:
			
			double Pon = calcularPotencia(Consola.leerDouble("Introduce el numero basa"), Consola.leerDouble("Introduce el numero en potencia"));
			
			System.out.println("La potencia es: " +Pon);
			
			break;
		case 3:
			
			double en = mayorQue(Consola.leerDouble("Introduce tu primer numero"), Consola.leerDouble("Introduce tu segundo numero"));
			
			System.out.println("El numero mayor es: " +en);
			
			break;
		case 4:
			
			double raiz = calcularRaizCuadrada(Consola.leerDouble("Introduce tu numero que quieras calcular tu raiz cuadrada"));

			System.out.println("La raiz cuadrada es: " +raiz);
			break;

		default:
			
			System.out.println("OPCION INVALIDA");
			break;
		}
	}
	
	
	public static int calcularModulo(int a, int b) {
		
		return a % b;
	}
	
	public static double calcularPotencia(double a, double b) {
		
		return Math.pow(a, b); // Funciones de la clases Math
	}
	
	public static double mayorQue(double a, double b) {
		return Math.max(a, b);
	}
	
	public static double calcularRaizCuadrada(double a) {
		
		return Math.sqrt(a);
	}

}
