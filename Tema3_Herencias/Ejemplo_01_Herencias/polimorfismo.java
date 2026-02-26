package Ejemplo_01_Herencias;

public class polimorfismo {


	public static void describirAcciones (IAnimal a) {
		// Pasamor por parametros un ibjeto de clase padres
		System.out.println("Tipo: " + a.getClass().getSimpleName());
		System.out.println("Sonido: " + a.hacerSonido());
		System.out.println("---------------------------------");
	}
	
	
	public static void imprimeAnimal (Animal a) {
		System.out.println(a);
	}
	
	public static void probarPadre() {
		Animal [] wb = {
				new Gato("Tom",10,true,"gris"),
				new Raton("Jerry", 12, true, true),
				new Perro("Spike", 10, true)
		};
		
		for (Animal animal : wb) {
			imprimeAnimal(animal);
		}
	}
	
	public static void probarInterfaz() {
		IAnimal [] IWarnerBros = {
				new Gato("Tom",10,true,"gris"),
				new Raton("Jerry", 12, true, true),
				new Perro("Spike", 10, true)
		};
		
		for (IAnimal iAnimal : IWarnerBros) {
			describirAcciones(iAnimal);
		}
	}
	
	public static void main(String[] args) {
		probarPadre();
		probarInterfaz();
	}
	
	// veamos el polimorfismos
	

}
