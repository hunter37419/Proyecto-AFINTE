package com.afinte.sis.models.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cobranza")
public class Cobranza {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="llave")
	private Integer llave;
	
	@Column(name="cliente")
	private String cliente;
	
	@Column(name="sucursal")
	private String sucursal;
	
	@Column(name="cod_cliente")
	private Integer cod_cliente;
	
	@Column(name="banco")
	private String banco;
	
	@Column(name="factura")
	private String factura;
	
	@Column(name="monto_fact_ind")
	private double monto_fact_ind;
	
	@Column(name="fecha_trans")
	private Date fecha_trans;
	
	@Column(name="fecha_Depo")
	private Date fecha_Depo;
	
	@Column(name="depo_total")
	private double depo_total;
	
	@Column(name="estado")
	private String estado;
	
	
	public Cobranza() {
		
	}

	public Integer getLlave() {
		return llave;
	}
	public void setLlave(Integer llave) {
		this.llave = llave;
	}
	public String getCliente() {
		return cliente;
	}
	public void setCliente(String cliente) {
		this.cliente = cliente;
	}
	public String getSucursal() {
		return sucursal;
	}
	public void setSucursal(String sucursal) {
		this.sucursal = sucursal;
	}
	public Integer getCod_cliente() {
		return cod_cliente;
	}
	public void setCod_cliente(Integer cod_cliente) {
		this.cod_cliente = cod_cliente;
	}
	public String getBanco() {
		return banco;
	}
	public void setBanco(String banco) {
		this.banco = banco;
	}
	public String getFactura() {
		return factura;
	}
	public void setFactura(String factura) {
		this.factura = factura;
	}
	public double getMonto_fact_ind() {
		return monto_fact_ind;
	}
	public void setMonto_fact_ind(double monto_fact_ind) {
		this.monto_fact_ind = monto_fact_ind;
	}
	public Date getFecha_trans() {
		return fecha_trans;
	}
	public void setFecha_trans(Date fecha_trans) {
		this.fecha_trans = fecha_trans;
	}
	public Date getFecha_Depo() {
		return fecha_Depo;
	}
	public void setFecha_Depo(Date fecha_Depo) {
		this.fecha_Depo = fecha_Depo;
	}
	public double getDepo_total() {
		return depo_total;
	}
	public void setDepo_total(double depo_total) {
		this.depo_total = depo_total;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}

	@Override
	public String toString() {
		return "Cobranza [llave=" + llave + ", cliente=" + cliente + ", Sucursal=" + sucursal + ", cod_cliente=" + cod_cliente + ", Banco=" + banco +  ", Factura=" + factura +  ", monto_fact_ind=" + monto_fact_ind +  ", Fecha_trans=" + fecha_trans + ", Fecha_Depo=" + fecha_Depo +  ", Depo_total=" + depo_total +  ", Estado=" + estado +  "]";
	}

}
