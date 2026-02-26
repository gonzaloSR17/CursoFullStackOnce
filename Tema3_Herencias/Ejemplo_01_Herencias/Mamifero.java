package Ejemplo_01_Herencias;


 public abstract class Mamifero extends Animal{
	
	protected boolean tienePelo;

	
	// 2.  Constructires
	// 2.1. COnstructores por defecto
		
	
	public Mamifero() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mamifero(String nombre, int edad, boolean tienePelo) {
		super(nombre, edad);
		this.tienePelo = tienePelo;
	}

	public boolean isTienePelo() {
		return tienePelo;
	}

	public void setTienePelo(boolean tienePelo) {
		this.tienePelo = tienePelo;
	}
	
	

	@Override
	public String toString() {
		String miJSON = super.toString();
		miJSON = miJSON.substring(0, miJSON.lastIndexOf("}")).trim();
		miJSON  += ",\n \"Tiene Pelo\":\"" + (this.isTienePelo()? "Si" : "No") + "\"" +
		"\n }";
		return miJSON;
	}
	

}
