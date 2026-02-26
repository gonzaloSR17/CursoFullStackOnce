package Ejemplo_01_Herencias;

public class Gato extends Mamifero implements IAnimal {

	private String nombre;
	private String colorPelaje;
	
	public Gato() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Gato(String nombre, int edad, boolean tienePelo, String color) {
		super(nombre, edad, tienePelo);
		this.nombre = nombre;
		this.colorPelaje = color;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getColorPelaje() {
		return colorPelaje;
	}
	public void setColorPelaje(String colorPelaje) {
		this.colorPelaje = colorPelaje;
	}

	
	public String hacerSonido() {
		return "Miau Miau";
	}
	@Override
	public String toString() {
		String miJSON = super.toString();
		miJSON = miJSON.substring(0, miJSON.lastIndexOf("}")).trim();
		miJSON  += ",\n \"nombre?\":\"" + (this.getNombre()) +  "\"," +
				"\n \"Tiene Pelo\":\"" + this.isTienePelo() + "\"," +
				   ",\n \"color pelaje\":\"" + this.getColorPelaje() +  "\"," +
		"\n }";
		return miJSON;
	}
	@Override
	public String moverse() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public static void main(String[] args) {
		
		try {
			String edadUsuario = "ocho";
			int edad = convertirEdad(edadUsuario);
			Gato Garfield = new Gato("Garfield", edad, true, "orange");
			
			FichaSanitaria fichaGarfield =  new FichaSanitaria("EG01", true);
			
			Garfield.setFicha(fichaGarfield);
			
			System.out.println(Garfield);
			
		} catch (ExcepcionNumIncorrecto e0) {
			// TODO: handle exception
			System.out.println("Dime bien la edad / " +e0.getMessage());
			System.out.println("vnjnsdvunds");
		}
		catch (NullPointerException error) 
		{
			// TODO: handle exception
			System.out.println("Hubo un error en el gato");
			System.out.println(error.getMessage());
		} catch (IllegalArgumentException error) {
			// TODO: handle exception
			System.out.println("Hubo un error en el gato");
			System.out.println(error.getMessage());
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Hubo un error GENERICO en el gato");
			System.out.println(e.getMessage());
		} 
		
	}
	
	
	
	
}
