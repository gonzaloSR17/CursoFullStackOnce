package bloqueC;
import utilidades.*;

public class Suma100 {
	
	public static void suma100() {
		
		int total = 0;
		
		for (int i = 0; i < 100; i++) {
			total += i;
		}
		
		Consola.escribir("El total de los 100 numeros sumado es " +total);
	}

}
