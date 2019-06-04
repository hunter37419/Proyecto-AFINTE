export class Usuario{

	private _dni:string;
	private _nombre:string;
	private _ape_paterno:string;
	private _ape_materno:string;
	private _email:string;
	private _pass:string;
	private _rol:string;
	private _celular:string;

	constructor(dni:string,nombre:string,apepat:string,apemat:string,email:string,pass:string,rol:string,cel:string){
		this._dni = dni;
		this._nombre = nombre;
		this._ape_paterno = apepat;
		this._ape_materno = apemat;
		this._email = email;
		this._pass = pass;
		this._rol = rol;
		this._celular = cel; 
	}

	get dni(): string{
		return this._dni;
	}

	get nombre(): string{
		return this._nombre;
	}

	get ape_materno(): string{
		return this._ape_materno;
	}

	get ape_paterno(): string{
		return this._ape_paterno;
	}

	get email(): string{
		return this._email;
	}

	get password(): string{
		return this._pass;
	}

	get rol(): string{
		return this._rol;
	}

	get celular(): string{
		return this._celular;
	}


}