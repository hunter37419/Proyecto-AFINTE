export class Cartera{
	llave: number;
	empresa: string; // compañia
	sucursal: string;
	ruc: string; // arif
	codigo_sip: string;//codigo_sipp
	razon_social:string;
	direccion:string; // dir_legal

	tipo_doc:string; //T.D.
	factura:string;//numero
	fecha_emi:Date;//fecha_emision
	fecha_venc:Date;//fecha_venc

	moneda:string;
	importe_og:number;//imp. orig
	
	saldo_act:number;
	saldo_equi:number;//saldo_equi

}