package bloqueC;

import utilidades.Consola;
public class tablaMultiplicar {
		
		public static void tablaMul(int n) {

			System.out.println("TABLA DE MULTIPLICAR DE " +n);
			for (int i = 0; i < 11; i++) {
				Consola.escribir(i+ " * " +n+ " = " +(i*n));
			}
		}

}
