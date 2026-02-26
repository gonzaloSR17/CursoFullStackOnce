package Ejercicio2_poo;

public class Vehiculo {
	public String matricula = "";
	public String marca = "";
	private float precioPorDia = 0.0f;
	public String getMatricula() {
		return matricula;
	}
	
	
	public Vehiculo(String matricula, String marca, float precioPorDia) {
		super();
		this.matricula = matricula;
		this.marca = marca;
		this.precioPorDia = precioPorDia;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public float getPrecioPorDia() {
		return precioPorDia;
	}
	public void setPrecioPorDia(float precioPorDia) {
		this.precioPorDia = precioPorDia;
	}


	@Override
	public String toString() {
		return "Vehiculo [matricula=" + this.matricula + ", marca=" + this.marca + ", precioPorDia=" + this.precioPorDia + "]";
	}
	
	
	
	
}


