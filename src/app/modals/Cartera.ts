export class Cartera{
	llave: number;
	empresa: string; // compañia
	sucursal: string;
	ruc: string; // arif
	codigo_sip: string;//codigo_sipp
	razon_social:string;
	direccion:string; // dir_legal
	dist_legal?:string; 
	dir_entrega?:string;
	dist_entrega?:string;
	clase?:string;
	tipo_doc:string; //T.D.
	factura:string;//numero
	fecha_emi:Date;//fecha_emision
	fecha_venc:Date;//fecha_venc
	dias?:number;
	aging?:string;
	moneda:string;
	importe_og:number;//imp. orig
	cobranza?:number;
	saldo_act:number;
	saldo_equiv:number;//saldo_equi
	soles?:number;
	cond_pago_dias?:number;
	cobrador?:string;
	vend_gases?:string;
	vend_mercaderia?:string;
	disputa?:boolean;
	legal?:boolean;
	castigo?:boolean;
	provisionado?:boolean;
	motivo_disputa?:string;
	motivo_castigo?:string;

}