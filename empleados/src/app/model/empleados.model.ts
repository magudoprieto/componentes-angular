export class Empleados{

	nombre:string;
	apellidos:string;
	imagen:string;
	departamento:string;
	activo: boolean;

	constructor(pNombre,pApellidos,pImagen,pDepartamento,pActivo){

		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.imagen = pImagen;
		this.departamento = pDepartamento;
		this.activo = pActivo;
	}
}