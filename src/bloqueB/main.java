package bloqueB;

import bloqueB.calculosCientificos;
import bloqueB.meses;
import bloqueB.dias;
import bloqueB.notas;
import bloqueB.mensaje;
import utilidades.Consola;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		imprimirMenu();
	}
	
	public static void imprimirMenu() {
		System.out.println("=================================");
		System.out.println("  Menu Principal ");
		System.out.println("=================================");
		System.out.println("1. Pide un numero del 1 al 7 y muestra el dia de la semana");
		System.out.println("2. Pide un numero del 1 al 12 y muestra el mes correspondiente");
		System.out.println("3. Calculos cientificos");
		System.out.println("4. Nota númerica");
		System.out.println("5.- Pide un numero del 1 al 5 y te enseña un mensaje");
		System.out.println();
		System.out.println("================================");
		ejecutarOpcion(Consola.leerEntero("Elige una opcion"));
		
	}
	
	public static void ejecutarOpcion(int n) {
		
		switch (n) {
		case 1:
			String mes = meses.indicaMes(Consola.leerEntero("Introduce tu mes"));
			
			System.out.println("El mes seleccionado es: " +mes);
			
			break;
		case 2:
			String dia = dias.indicaDia(Consola.leerEntero("Introduce un dia de la semana"));
			
			System.out.println("El dia de la semana es: " +dia);
			break;
		case 3:
			
			calculosCientificos.imprimirMenu();
	
			break;
		case 4:
			notas.diNotas(Consola.leerEntero("Selecciona tu nota academia"));
			
			break;
		case 5:
			System.out.println(mensaje.imprimirMensaje(Consola.leerEntero("Pon un numero del 1-5 y te cuento un chiste")));
			break;
		default:
			
			break;
		}
		
	}

}
