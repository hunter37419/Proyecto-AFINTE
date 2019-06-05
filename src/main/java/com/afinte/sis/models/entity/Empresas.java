package com.afinte.sis.models.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="empresas")
public class Empresas {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="ruc")
	private String ruc;
	@Column(name="nombre")
	private String nombre;
	@Column(name="dir_legal")
	private String dir_legal;
	@Column(name="dis_legal")
	private String dis_legal;
	@Column(name="dir_entrega")
	private String dir_entrega;
	@Column(name="dis_entrega")
	private String dis_entrega;
	public Empresas() {
		super();
	}
	public Empresas(Integer id, String ruc, String nombre, String dir_legal, String dis_legal, String dir_entrega,
			String dis_entrega) {
		super();
		this.id = id;
		this.ruc = ruc;
		this.nombre = nombre;
		this.dir_legal = dir_legal;
		this.dis_legal = dis_legal;
		this.dir_entrega = dir_entrega;
		this.dis_entrega = dis_entrega;
	}


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getRuc() {
		return ruc;
	}
	public void setRuc(String ruc) {
		this.ruc = ruc;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDir_legal() {
		return dir_legal;
	}
	public void setDir_legal(String dir_legal) {
		this.dir_legal = dir_legal;
	}
	public String getDis_legal() {
		return dis_legal;
	}
	public void setDis_legal(String dis_legal) {
		this.dis_legal = dis_legal;
	}
	public String getDir_entrega() {
		return dir_entrega;
	}
	public void setDir_entrega(String dir_entrega) {
		this.dir_entrega = dir_entrega;
	}
	public String getDis_entrega() {
		return dis_entrega;
	}
	public void setDis_entrega(String dis_entrega) {
		this.dis_entrega = dis_entrega;
	}


	@Override
	public String toString() {
		return "Empresas [id=" + id + ", ruc=" + ruc + ", nombre=" + nombre + ", dir_legal=" + dir_legal
				+ ", dis_legal=" + dis_legal + ", dir_entrega=" + dir_entrega + ", dis_entrega=" + dis_entrega + "]";
	}
	
}
