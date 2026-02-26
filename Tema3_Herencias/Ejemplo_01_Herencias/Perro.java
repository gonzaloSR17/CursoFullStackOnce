package Ejemplo_01_Herencias;

public class Perro extends Mamifero implements IAnimal {

	// Atributos
	
	public String raza;
	public boolean esDomestico;
	public boolean esRabioso;
	
	
	// Constructores
	
	public Perro() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Perro(String nombre, int edad, boolean tienePelo) {
		super(nombre, edad, tienePelo);
		// TODO Auto-generated constructor stub
	}
	
	public String getRaza() {
		return raza;
	}
	
	public void setRaza(String raza) {
		this.raza = raza;
	}
	
	public boolean isEsDomestico() {
		return esDomestico;
	}
	
	public void setEsDomestico(boolean esDomestico) {
		this.esDomestico = esDomestico;
	}
	
	public boolean isEsRabioso() {
		return esRabioso;
	}
	
	public void setEsRabioso(boolean esRabioso) {
		this.esRabioso = esRabioso;
	}
	
	public String hacerSonido() {
		return "Guau, Guau";
	}
	@Override
	public String toString() {
		String miJSON = super.toString();
		miJSON = miJSON.substring(0, miJSON.lastIndexOf("}")).trim();
		miJSON  += ",\n \"Raza?\":\"" + (this.getRaza()) +  "\"," +
				"\n \"Sonido\":\"" + this.hacerSonido() + "\"," +
				   ",\n \"Domestico?\":\"" + (this.isEsDomestico()? "Domesticado" : "Salvaje") +  "\"," +
		"\n }";
		return miJSON;
	}
	@Override
	public String moverse() {
		// TODO Auto-generated method stub
		return null;
	}
	

}
