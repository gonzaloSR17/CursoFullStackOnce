package Ejemplo_01_Herencias;

// Clase Padre
public abstract class Animal {

	// 1 Atributos
	protected String nombre;
	protected int edad;
	
	private FichaSanitaria ficha;
	
	// 2 Constructores -> Crea los objetos
	// 2.1 Constructor completo
	
	public Animal(String nombre, int edad) {
		this.setNombre(nombre);
		this.setEdad(edad);
	}

	// constructor por defecto
	
	public Animal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		
		if (edad > 0) {
			this.edad = edad;
		} else {
			throw new IllegalArgumentException("La edad no puede ser negativo, guapo");
		}
		
	}
	/**
	 * 
	 * @param edadTexto:string
	 * @return edad:int
	 * @throws ExcepcionNumIncorrecto -> Clase propia
	 */
	// Metemos un metodo estatico para convertir el entero en cadena ("ocho" > 8)
	// Lanzamos la excepcion propia;
	public static int convertirEdad(String edadTexto) throws ExcepcionNumIncorrecto {
		// TODO Auto-generated method stub
		try {
			return Integer.parseInt(edadTexto);
		} catch (NumberFormatException e) {
			// TODO: handle exception
			throw new ExcepcionNumIncorrecto("Hubo un error");
		}
	}
	

	 public FichaSanitaria getFicha() {
		return ficha;
	}

	public void setFicha(FichaSanitaria ficha) {
		this.ficha = ficha;
	}

	 // 4. Metodos Adicionales
    // Dejo un método abstracto -> SIN DESARROLLAR {}
    // OJO, esto va a provoca que mis HIJOS y NIETOS sean también abstractos
    public abstract String hacerSonido();
    public abstract String moverse();
    
	  // 5. to string
	  @Override
	  public String toString() {
	    return "{"
	      + "\n \"Animal\":\"" + this.getClass().getSimpleName() +  "\"," +
	        "\n \"Nombre\":\"" + this.getNombre() + "\"," +
	        "\n \"Edad\":" + this.getEdad() + "," +
	        "\n \"Ficha\":" + this.getFicha() +
	        "\n }";
	  }
	  
	/*
	public static void main(String[] args) {
		Animal pepito = new Animal("Pepito Grillo", 38);
	}
	*/
	
	
	
	
	
}
