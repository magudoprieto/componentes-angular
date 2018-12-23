export class Empleado {

	nombre:string;
	apellidos: string;
	edad: number;
	departamento: string;
	imagen: string;
	activo: boolean;

	constructor(pNombre,pApellidos,pEdad,pDepartamento,pImagen,pActivo){
		this.nombre = pNombre;
		this.apellidos = pApellidos;
		this.edad = pEdad;
		this.departamento = pDepartamento;
		this.imagen = pImagen;
		this.activo = pActivo;
	}
}