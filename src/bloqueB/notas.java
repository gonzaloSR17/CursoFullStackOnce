package bloqueB;

public class notas {
	
	public static String diNotas(int n) {
		
		if (n < 4) {
			return "SUSPENSO";
		} else if (n <= 6) {
			return "SUFICIENTE";
		} else if (n <= 8) {
			return "NOTABLE";
		} else if (n <= 10) {
			return "SOBRESALIENTE";
		} else {
			return "NOTA ERRONEA";
		}
	}

}
