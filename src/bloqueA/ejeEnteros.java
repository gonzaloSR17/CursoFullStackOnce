package bloqueA;

import java.util.Scanner;

import utilidades.Consola;

public class ejeEnteros {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		pedirNum();
	}
	
	static boolean numEntero(int num1) {
		if (num1 > 0) {
			System.out.println("El numero es positivo");
			return true;
		} else {
			System.out.println("El numero es negativo");
			return false;
		}
	}
	
	static void pedirNum() {
		numEntero(Consola.leerEntero("Introduce un numero"));
	}

}
