package Ejemplo_01_Herencias;

public class Raton extends Mamifero implements IAnimal {
	
	// Atributo propio
	
	public boolean esDeLaboratorio;

	public Raton() {
		super();
		this.esDeLaboratorio = true;
		// TODO Auto-generated constructor stub
	}

	public Raton(String nombre, int edad, boolean tienePelo, boolean esDeLaboratorio) {
		super(nombre, edad, tienePelo);
		this.setEsDeLaboratorio(esDeLaboratorio);
		// TODO Auto-generated constructor stub
	}

	public boolean isEsDeLaboratorio() {
		return esDeLaboratorio;
	}

	public void setEsDeLaboratorio(boolean esDeLaboratorio) {
		this.esDeLaboratorio = esDeLaboratorio;
	}
	
	public String hacerSonido() {
		return "¡Aha, Mickey Mouse!";
	}

	@Override
	public String toString() {
		String miJSON = super.toString();
		miJSON = miJSON.substring(0, miJSON.lastIndexOf("}")).trim();
		miJSON  +=  
		"\n \"Sonido\":\"" + this.hacerSonido() + "\"," +
		"\n \"Sonido\":\"" + this.hacerSonido() + "\"," +
		",\n \"Laboratorio?\":\"" + (this.isEsDeLaboratorio()? "Si" : "No") + "\"" +
		"\n }";
		return miJSON;
		
		// ",\n \"Sonido\":\"" + (this.hacerSonido()) + "," ;
	}
	
	private String paraExperimento(String nombreExperimento) {
		// TODO Auto-generated method stub
		if(this.isEsDeLaboratorio()) {
			return "El Raton esta listo para el " +nombreExperimento;
		} else {
			return "El raton NO es de laboratorio";
		}
	}
	
	public static void main(String[] args) {
		Raton micki = new Raton("Mickey Mouse", 30, true, true);
		
		FichaSanitaria fichaMicki = new FichaSanitaria("M01", true);
		
		micki.setFicha(fichaMicki);
		
		
		System.out.println(micki);
	}

	@Override
	public String moverse() {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
