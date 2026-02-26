package Ejemplo_01_Herencias;

public abstract class Ave extends Animal {
	
	protected boolean puedeVolar;

	public Ave() {

	}

	public Ave(boolean puedeVolar) {
		this.puedeVolar = puedeVolar;
	}

	public boolean isPuedeVolar() {
		return puedeVolar;
	}

	public void setPuedeVolar(boolean puedeVolar) {
		this.puedeVolar = puedeVolar;
	}

	@Override
	public String toString() {
		return "puedeVolar=" + puedeVolar;
	}
	
	
	
	

}
