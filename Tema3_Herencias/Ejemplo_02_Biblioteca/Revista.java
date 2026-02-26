package Ejemplo_02_Biblioteca;

public class Revista extends Publicacion{
	
	private int periocidad;
	public String editorial;
	
	
	public Revista(String titulo, int publicacion, float asignatura, boolean disponible, int numPublicaciones,
			int periocidad, String editorial) {
		super(titulo, publicacion, asignatura, disponible, numPublicaciones);
		this.periocidad = periocidad;
		this.editorial = editorial;
	}

	public int getPeriocidad() {
		return periocidad;
	}

	public void setPeriocidad(int periocidad) {
		this.periocidad = periocidad;
	}

	public String getEditorial() {
		return editorial;
	}

	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}

	public Revista() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public static Revista crearRevista(String titulo, int publicacion, boolean disponible ,float asignatura, String editorial, int periocidad ,int numPublicacion) {
		
		return new Revista(titulo, publicacion, asignatura, disponible, numPublicacion, periocidad, editorial);
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
				+ "\n \"periocidad\":" + this.getPeriocidad() + "," +
		        "\n \"Editorial\":" + "\"" + this.getEditorial() + "\"" +
		        "\n" + "}";
				
				
		return miJSON;
	}

	public static void main(String[] args) {
		Revista playboy = crearRevista("Muy intersante", 2001 ,true, 4.3f, "Carlos", 20, 30);
		System.out.println(playboy.toString());
	}
	
	
	

}
