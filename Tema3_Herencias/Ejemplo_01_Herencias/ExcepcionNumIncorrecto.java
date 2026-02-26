package Ejemplo_01_Herencias;

/*
 * Clase de excepcion personalizada  -> hereda de excepcion
 * 1. Definir la clase ExceptionNumIncorrecto.java -> hereda de Exception
 * 2. Añadir metodo de control donde salta la excepción (Animal.java)
 * 3. Añadirlo en try-catch del amin (Raton.java)
 */
public class ExcepcionNumIncorrecto extends Exception{
	
	// Defino un metodo para el formato incorrecto
	
	public ExcepcionNumIncorrecto(String mensaje) {
		// TODO Auto-generated method stub
		super(mensaje);
	}

}
