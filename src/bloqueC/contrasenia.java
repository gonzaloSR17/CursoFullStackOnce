package bloqueC;

import utilidades.*;

public class contrasenia {
	
	public static void pedirContrasenia() {
		
		String contrasenia = "";
		
		while (!contrasenia.equals("Jesusa2001.")) {
			
			contrasenia = Consola.leerString("Escribe una contraseña");
			
		}
		
		System.out.println("Contraseña correcta");
	}

}
