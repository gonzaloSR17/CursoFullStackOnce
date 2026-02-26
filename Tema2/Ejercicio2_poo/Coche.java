package Ejercicio2_poo;

public class Coche {
	
	 public String matricula;
	 public String marca;
	 public String modelo;
	 private float precioPorDia;
	 
	 // Constructor
	 
	 public Coche(String matricula, String marca, String modelo, float precioPorDia) {
		this.matricula = matricula;
		this.marca = marca;
		this.modelo = modelo;
		this.setPrecioPorDia(precioPorDia);
	 }
	 
	 
	 public String getMatricula() {
		return matricula;
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


	 public String getModelo() {
		 return modelo;
	 }


	 public void setModelo(String modelo) {
		 this.modelo = modelo;
	 }


	 private float getPrecioPorDia() {
		 return precioPorDia;
	 }


	 private void setPrecioPorDia(float precioPorDia) {
		 this.precioPorDia = precioPorDia > 300 ? precioPorDia : 0;
	 }


	 public float calcularPrecio(int dias) {
		 return this.precioPorDia * dias;
	 }
	 
	 public boolean saldoDisponible(float dinero) {
		 return dinero > precioPorDia;
	 }


	 @Override
	 public String toString() {
		return "Coche [Vehiculo: " + this.getClass().getSimpleName() +  "matricula=" + matricula + ", marca=" + marca + ", modelo=" + modelo + ", precioPorDia="
				+ precioPorDia + "]";
	 }
	 
	 

}
