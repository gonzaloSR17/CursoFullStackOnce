package Ejemplo_01_Herencias;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class ComparaAnimales {
	
	public static final Comparator<Animal> compara = (a1,a2) -> {
		int valorCompara;
		valorCompara = Integer.compare(a1.getEdad(), a2.getEdad());
		if (valorCompara != 0) {
			return valorCompara;
		} else {
			// CompareToIgnoreCase compara cadenas ignorando MAYUS o MINUS
			return a1.getNombre().compareToIgnoreCase(a2.getNombre());
		}
	};
	
	public static void main(String[] args) {
		// List -> Arrays de objetps
		
		List<Animal> animales =  new ArrayList<Animal>();
		
		animales.add(new Gato("Garfield", 80, true, "orange"));
		animales.add(new Raton("Mickey Mouse", 30, true, true));
		animales.add(new Flamenco(true, "Phoenicopterus", "Gon", 3.7f, false));
		animales.add(new Perro("Spike", 30, true));
		
		System.out.println("Animales sin ordenar");
		
		for (Animal animal : animales) {
			System.out.println("Nombre ->" + animal.getNombre());
			System.out.println("Edad ->" + animal.getEdad());
		}
		
		System.out.println("Animales ordenados");
		Collections.sort(animales, compara);
		
		for (Animal animal : animales) {
			System.out.println("Nombre ->" + animal.getNombre());
			System.out.println("Edad ->" + animal.getEdad());
		}
	}

}
