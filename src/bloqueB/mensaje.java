package bloqueB;

public class mensaje {
	
	public static String imprimirMensaje(int n) {
		
		switch (n) {
		case 1:
			return "¿Por qué Gormiti fue a pedirle ayuda a Jesusita la historiadora lechera?\n"
					+ "Porque necesitaba derrotar al Señor del Caos y nadie conoce mejor las batallas antiguas… ni cómo ordeñar la historia";
		case 2:
			return "¿Por qué en LazyTown llamaron a Jesusita la historiadora lechera?\n"
					+ "Porque Sportacus podía saltar y hacer piruetas…\n"
					+ "pero nadie sabía mejor cómo explicar la historia mientras repartía leche desnatada";
		case 3:
			return "—¿Por qué el libro de matemáticas estaba triste?\n"
					+ "—Porque tenía demasiados problemas ";
		case 4:
			return "—¿Qué hace una abeja en el gimnasio?\n"
					+ "—¡Zum-ba!";
		case 5:
			return "—¿Por qué la historiadora jesuita nunca juega a las escondidas?\n"
					+ "—Porque cada vez que encuentra algo, lo anota, lo analiza y lo publica… ¡y todos la encuentran igual!";

		default:
			return "Ups… ese chiste aún no existe. Ingresa un número del 1 al 5.";
		}
	}

}
