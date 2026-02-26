package Ejemplo_02_Biblioteca;

public class Libro extends Publicacion implements iPrestamo {
	
	public String autor;
	public int numPaginas;
		
	public Libro() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Libro(String titulo, int publicacion, float asignatura, boolean disponible, int numPublicaciones,
			String autor, int numPaginas) {
		super(titulo, publicacion, asignatura, disponible, numPublicaciones);
		this.autor = autor;
		this.numPaginas = numPaginas;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public int getNumPaginas() {
		return numPaginas;
	}

	public void setNumPaginas(int numPaginas) {
		this.numPaginas = numPaginas;
	}
	
	public static Libro crearLibro(String titulo, int publicacion, float asignatura, boolean disponible, int numPublicaciones,
			String autor, int numPaginas) {
		//Libro libro = new Libro
		return new Libro(autor, numPaginas, numPaginas, disponible, numPaginas, autor, numPaginas);
		
	}
	
	// Metodos adiccionale

    @Override
    public void prestar() {
        disponible = false;
        System.out.println("Libro prestado");
    }

    @Override
    public void devolver() {
        disponible = true;
        System.out.println("Libro devuelto");
    }
    
	
	@Override
	public String toString() {
		String miJSON = super.toString();
		miJSON = miJSON.substring(0, miJSON.lastIndexOf("}")).trim();
		miJSON += ","
				+ "\n \"Autor\":" + "\"" + this.getAutor() + "\"," +
		        "\n \"NumPaginas\":"  + this.getNumPaginas() +
		        "\n" + "}";
				
		return miJSON;
	}
	
	public static void main(String[] args) {
	
		Libro libro1 = crearLibro("Geronimo Stilton en el reino de la fantasia", 2001, 12.40f, false, 25, "Geronimo Stilton", 400);
		
		System.out.println(libro1.toString());
		
		libro1.devolver();
		
		System.out.println(libro1.toString());
		
	}

}
