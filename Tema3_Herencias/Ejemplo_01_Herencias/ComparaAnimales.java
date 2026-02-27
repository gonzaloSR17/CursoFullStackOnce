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
	
	public static final Comparator<Animal> comparaCriterioPropio = (a1,a2)-> {
		int valorCompara;
		
		// 0. Via equals
		if (a1.equals(a2)) {
			return 0;
		}
		// 1 vamos a comparar tipos de objetos(Gato, Halcon, Perro, Raton) 
		String tipo1 = a1.getClass().getSimpleName();
		String tipo2 = a2.getClass().getSimpleName();
		valorCompara = tipo1.compareToIgnoreCase(tipo2);
		if (valorCompara != 0) {
			return valorCompara;
		}
		
		// 2 Si los objetos son el mismo
		if (a1 instanceof Flamenco == a2 instanceof Flamenco) {
			Flamenco h1 = (Flamenco)a1;
			Flamenco h2= (Flamenco)a2;
			
			valorCompara = Integer.compare((int) h1.getPeso(),(int) h2.getPeso());
	
		}
		
		// 3 Si los objetos son Ratones ordeno por laboratorio
		if (a1 instanceof Raton && a2 instanceof Raton) {
			Raton h1 = (Raton)a1;
			Raton h2= (Raton)a2;
			valorCompara = Boolean.compare(h1.isEsDeLaboratorio(), h2.isEsDeLaboratorio());
		}
		return valorCompara;
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
		
		// Hacemos 2 copias de la lista, para mantener la original
		
		List<Animal> animales1 =  new ArrayList<Animal>();
		List<Animal> animales2 =  new ArrayList<Animal>();
		
		animales2.add(new Gato("Garfield", 80, true, "orange"));
		animales2.add(new Raton("Mickey Mouse", 30, true, true));
		animales2.add(new Raton("Jerry", 30, true, true));
		animales2.add(new Flamenco(true, "Phoenicopterus", "Gon", 3.7f, false));
		animales2.add(new Perro("Spike", 30, true));
		
		System.out.println("Animales ordenados por criterios propios");
		Collections.sort(animales1, comparaCriterioPropio);
		
		for (Animal animal : animales2) {
			System.out.println(animales2);
		}
		
	}

}
