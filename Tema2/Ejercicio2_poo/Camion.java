package Ejercicio2_poo;

import bloqueB.main;

public class Camion {
	
	// 1. Atributos
	 public String matricula;
	 public String marca;
	 public String modelo;
	 public float capacidadCargaKg;
	 private float precioPorDia;
	 
	 


	 public Camion(String matricula, String marca, String modelo, float capacidadCargaKg, float precioPorDia) {
		this.matricula = matricula;
		this.marca = marca;
		this.modelo = modelo;
		this.capacidadCargaKg = capacidadCargaKg;
		setPrecioPorDia(precioPorDia);
	}

	 private void setPrecioPorDia(float precioPorDia) {
		 this.precioPorDia = precioPorDia > 300 ? precioPorDia : 0;
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

	 public float getCapacidadCargaKg() {
		 return capacidadCargaKg;
	 }

	 public void setCapacidadCargaKg(float capacidadCargaKg) {
		 this.capacidadCargaKg = capacidadCargaKg > 1500 && capacidadCargaKg < 3000 ? capacidadCargaKg: 0;
	 }
	 
	 public float getCapacidad(float capacidad) {
		 
		 return this.capacidadCargaKg - (this.capacidadCargaKg * 10 /100);
		 
	 }

	 public float getPrecioPorDia() {
		 return precioPorDia;
	 }

	 @Override
	 public String toString() {
		return "Camion [Vehiculo: " + this.getClass().getSimpleName() + "matricula=" + matricula + ", marca=" + marca + ", modelo=" + modelo + ", capacidadCargaKg="
				+ capacidadCargaKg + ", precioPorDia=" + precioPorDia + "]";
	 }
	 
	 public static void main(String[] args) {
		 Camion camion1 = new Camion("Jesusa",  "jesusa", "jesusa", 4.3f, 5.5f);
		 
		 System.out.println(camion1);
	}
	 
	 


	 
}
