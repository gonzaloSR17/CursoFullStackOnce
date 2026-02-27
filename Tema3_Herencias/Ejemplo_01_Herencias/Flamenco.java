package Ejemplo_01_Herencias;

public class Flamenco extends Ave {

	private String nombreCientifico;
	private String nombre;
	private float peso;
	public boolean estarComiendo;
	
	public Flamenco() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Flamenco(boolean puedeVolar, String nombreCientfico, String nombre, float peso, boolean estaComiendo) {
		super(puedeVolar);
		this.nombreCientifico = nombreCientfico;
		this.nombre = nombre;
		this.peso = peso;
		this.estarComiendo = estarComiendo;
	}
	
	public String getNombreCientifico() {
		return nombreCientifico;
	}
	
	public void setNombreCientifico(String nombreCientifico) {
		this.nombreCientifico = nombreCientifico;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public float getPeso() {
		return peso;
	}
	
	public void setPeso(float peso) {
		this.peso = peso;
	}
	
	public boolean isEstarComiendo() {
		return estarComiendo;
	}
	
	public void setEstarComiendo(boolean estarComiendo) {
		this.estarComiendo = estarComiendo;
	}
	
	@Override
	public String toString() {
		return super.toString()+ "\n"
				+ " Nombre Cientifico = " +this.getNombre()+ 
				"\n Nombre Domestico = " +this.getNombre()+
				"\n Peso = " +this.getPeso()+
				"\n ¿ Esta comiendo ? = " +this.isEstarComiendo()+
				"\n ¿Es un Ave volador ? = " +super.toString()+
				"\n }";
	}
	
	public static void main(String[] args) {
		Flamenco Gon = new Flamenco(true, "Phoenicopterus", "Gon", 3.7f, false);
		
		System.out.println(Gon.toString());
	}
	@Override
	public String hacerSonido() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public String moverse() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
