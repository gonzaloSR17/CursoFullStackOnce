package Ejemplo_01_Herencias;

public class FichaSanitaria {
	  // 1.Atributos
	  private String chipID;
	  private boolean vacunado;

	  public FichaSanitaria() {
	    this.chipID = "";
	    this.vacunado = false;
	  }

	  // 2.Constructores
	  public FichaSanitaria(String chipID, boolean vacunado) {
	    this.chipID = chipID;
	    this.vacunado = vacunado;
	  }

	  // 5. to string
	  @Override
	  public String toString() {
	    return "{\n \"Clase\": \"" + this.getClass().getSimpleName() + "\"," +
	        "\n \"Numero de chip\":  \"" + this.chipID + "\"," +
	        "\n \"¿Vacunado?\":" + "\"" + (this.vacunado ? "Si" : "No") + "\"" +
	        "\n" + "}";
	  }

	  public static void main(String[] args) {
	    FichaSanitaria fichaBicho = new FichaSanitaria("1234CFR", true);
	    System.out.println(fichaBicho);
	  }

	}