package com.afinte.sis.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class UsuarioEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name="usuario")
	private String usuario;
	
	@Column(name="contrase")
	private String contrase;
	
	@Column(name="cargo")
	private String cargo;
	
	@Column(name="nombres")
	private String nombres;

	public UsuarioEntity() {
		super();
	}

	public UsuarioEntity(Integer id, String usuario, String contrase, String cargo, String nombres) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.contrase = contrase;
		this.cargo = cargo;
		this.nombres = nombres;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getContrase() {
		return contrase;
	}

	public void setContrase(String contrase) {
		this.contrase = contrase;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombres) {
		this.nombres = nombres;
	}

	@Override
	public String toString() {
		return "UsuarioEntity [id=" + id + ", usuario=" + usuario + ", contrase=" + contrase + ", cargo=" + cargo
				+ ", nombres=" + nombres + "]";
	}
	
}
