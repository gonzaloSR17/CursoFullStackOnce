package Ejemplo_02_Biblioteca;

abstract class Publicacion {
	
	public String titulo;
	protected int publicacion;
	public float asignatura;
	public boolean disponible;
	public int numPublicaciones;
	
	
	public Publicacion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Publicacion(String titulo, int publicacion, float asignatura, boolean disponible, int numPublicaciones) {
		this.titulo = titulo;
		this.publicacion = publicacion;
		this.asignatura = asignatura;
		this.disponible = disponible;
		this.numPublicaciones = numPublicaciones;
		
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getPublicacion() {
		return publicacion;
	}

	public void setPublicacion(int publicacion) {
		this.publicacion = publicacion;
	}

	public float getAsignatura() {
		return asignatura;
	}

	public void setAsignatura(float asignatura) {
		this.asignatura = asignatura;
	}

	public boolean isDisponible() {
		return disponible;
	}

	public void setDisponible(boolean disponible) {
		this.disponible = disponible;
	}

	public int getNumPublicaciones() {
		return numPublicaciones;
	}

	public void setNumPublicaciones(int numPublicaciones) {
		this.numPublicaciones = numPublicaciones;
	}
	

	@Override
	public String toString() {
		return "{"
			      + "\n \"Titulo\":\"" + this.getTitulo() + "\"," +
			        "\n \"Año de publicacion\":" + this.getPublicacion() + "," +
			        "\n \"Asignatura\":" + this.getAsignatura() + "," +
			        "\n \"NumPublicaciones\":" + this.getNumPublicaciones() + "," +
			        "\n \"Disponible\":" + (this.isDisponible() ? "Disponible" : "No Disponible") +
			        "\n }";
	}

}
