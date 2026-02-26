package Ejemplo_03_Conversiones;

public class Ej03_Conversiones {

	public static void main(String[] args) {
		Byte b = 10;
		Short s = b; // COnversion implicita
		int i = (int) s; // convencion explicitiva
		float eje = 0.1f;
	
		System.out.println("Numero es " +i);
	}
}
