package bloqueC;

import utilidades.Consola;
import bloqueB.calculosCientificos;
import bloqueB.dias;
import bloqueB.mensaje;
import bloqueB.meses;
import bloqueB.notas;
import bloqueC.imprimir10Numeros;
import bloqueC.*;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		imprimirMenu();
	}

		public static void imprimirMenu() {
			System.out.println("=================================");
			System.out.println("  Menu Principal (Bloque C) ");
			System.out.println("=================================");
			System.out.println("1. Muestra los números del 1 al 10 usando un bucle for");
			System.out.println("2. Pide un número y muestra su tabla de multiplicar del 1 al 10");
			System.out.println("3. Pide números por consola hasta que el usuario introduzca un 0");
			System.out.println("4. Calcula la suma de los numeros del 1 al 100");
			System.out.println("5. Pide una contraseña y repite la peticion mientra no sea correcta");
			System.out.println();
			System.out.println("================================");
			ejecutarOpcion(Consola.leerEntero("Elige una opcion"));
	}
		
		public static void ejecutarOpcion(int n) {
			switch (n) {
			case 1:
				imprimir10Numeros.imprimir10Num();
				break;
			case 2:
				tablaMultiplicar.tablaMul(Consola.leerEntero("Introduce un numero entero"));
				break;
			case 3:
				leerNumero.leerNum();
				break;
			case 4:
				Suma100.suma100();
				break;
			case 5:
				contrasenia.pedirContrasenia();
				break;
			default:
				break;
			}
		}
}
