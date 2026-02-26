package bloqueB;

public class dias {
	
	public static String indicaDia(int n) {
		String mes;
		switch (n) {
		case 1:
			mes = "Lunes";
			break;
		case 2:
			mes = "Martes";
			break;
		case 3:
			mes = "Miercoles";
			break;
		case 4:
			mes = "Jueves";
			break;
		case 5:
			mes = "Viernes";
			break;
		case 6:
			mes = "Sabado";
			break;
		case 7:
			mes = "Domingo";
			break;
		default:
			mes = "Mes Invalido";
			break;
		}
		return mes;
	}

}
