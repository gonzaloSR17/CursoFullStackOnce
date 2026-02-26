package Ejemplo_02_Biblioteca;

public class Biblioteca {
	
	public String nombre;
	public boolean publica;
	
	public Biblioteca(String nombre, boolean publica) {
		super();
		this.nombre = nombre;
		this.publica = publica;
	}

	public Biblioteca() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public boolean isPublica() {
		return publica;
	}

	public void setPublica(boolean publica) {
		this.publica = publica;
	}

	@Override
	public String toString() {
		return "Biblioteca [nombre=" + nombre + ", publica=" + publica + "]";
	}
	
	
	
	

}
