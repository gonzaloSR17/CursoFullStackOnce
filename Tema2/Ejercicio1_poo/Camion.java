package Ejercicio1_poo;

public class Camion {
	
	// Atributos del camion
	
	public String modelo = ""; // Nombre del modelo
	public int potencia = 100; // potencia del modelo
	public float consumo = 10.5f; // consumo de gasolina
	public boolean enMarcha = false; // booleano en march
	
	// Constructor
	
	public Camion() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Camion(String modelo, int potencia, float consumo, boolean enMarcha) {
		super();
		this.modelo = modelo;
		this.potencia = potencia;
		this.consumo = consumo;
		this.enMarcha = enMarcha;
	}
	
	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public int getPotencia() {
		return potencia;
	}

	public void setPotencia(int potencia) {
		this.potencia = potencia;
	}
	
	// 4 metodos adicionales
	
	public void subePotencia (int porcentaje) {
		if (porcentaje > 0) {
			
			this.setPotencia(this.potencia * porcentaje / 100);

		}
	}

	@Override
	public String toString() {
		return "Camion [modelo=" + modelo + ", potencia=" + potencia + ", consumo=" + consumo + ", enMarcha=" + enMarcha
				+ "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	

}
