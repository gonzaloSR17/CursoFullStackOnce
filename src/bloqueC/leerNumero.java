package bloqueC;
import utilidades.Consola;
public class leerNumero {

		public static void leerNum() {
			int n = 1;
			System.out.println("Este programa no te pedira ningun numero mas si pides 0");
			while (n != 0) {
				n = Consola.leerEntero("Dame un numero");
			}
		}
}
