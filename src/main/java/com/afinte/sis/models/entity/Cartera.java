package com.afinte.sis.models.entity;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cartera")
public class Cartera{

	    @Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="llave")
		private Integer llave;
		
		@Column(name="empresa")
		private String empresa;
		
		@Column(name="sucursal")
		private String sucursal;
		
		@Column(name="ruc")
		private String ruc;
		
		@Column(name="codigo_sip")
		private Integer codigo_sip;
		
		@Column(name="razon_social")
		private String razon_social;
		
		@Column(name="direccion")
		private String direccion;
		
		@Column(name="tipo_doc")
		private String tipo_doc;
		
		@Column(name="factura")
		private String factura;
		
		@Column(name="fecha_emi")
		private Date fecha_emi;
		
		@Column(name="fecha_venc")
		private Date fecha_venc;
		
		@Column(name="moneda")
		private String moneda;
		
		@Column(name="importe_og")
		private BigDecimal importe_og;
		
		@Column(name="saldo_act")
		private BigDecimal saldo_act;
		
		@Column(name="saldo_equi")
		private BigDecimal saldo_equi;
		
		
		public Cartera() {
			super();	
		}
		
		public Integer getLlave() {
			return llave;
		}
		public void setLlave(Integer llave) {
			this.llave = llave;
		}
		public String getEmpresa() {
			return empresa;
		}
		public void setEmpresa(String empresa) {
			this.empresa = empresa;
		}
		public String getSucursal() {
			return sucursal;
		}
		public void setSucursal(String sucursal) {
			this.sucursal = sucursal;
		}
		public String getRuc() {
			return ruc;
		}
		public void setRuc(String ruc) {
			this.ruc = ruc;
		}
		public Integer getCodigo_sip() {
			return codigo_sip;
		}
		public void setCodigo_sip(int codigo_sip) {
			this.codigo_sip = codigo_sip;
		}
		public String getRazon_social() {
			return razon_social;
		}
		public void setRazon_social(String razon_social) {
			this.razon_social = razon_social;
		}
		public String getDireccion() {
			return direccion;
		}
		public void setDireccion(String direccion) {
			this.direccion = direccion;
		}
		public String getTipo_doc() {
			return tipo_doc;
		}
		public void setTipo_doc(String tipo_doc) {
			this.tipo_doc = tipo_doc;
		}
		public String getFactura() {
			return factura;
		}
		public void setFactura(String factura) {
			this.factura = factura;
		}
		public Date getFecha_emi() {
			return fecha_emi;
		}
		public void setFecha_emi(Date fecha_emi) {
			this.fecha_emi = fecha_emi;
		}
		public Date getFecha_venc() {
			return fecha_venc;
		}
		public void setFecha_venc(Date fecha_venc) {
			this.fecha_venc = fecha_venc;
		}
		public String getMoneda() {
			return moneda;
		}
		public void setMoneda(String moneda) {
			this.moneda = moneda;
		}
		public BigDecimal getImporte_og() {
			return importe_og;
		}
		public void setImporte_og(BigDecimal importe_og) {
			this.importe_og = importe_og;
		}
		public BigDecimal getSaldo_act() {
			return saldo_act;
		}
		public void setSaldo_act(BigDecimal saldo_act) {
			this.saldo_act = saldo_act;
		}
		public BigDecimal getSaldo_equi() {
			return saldo_equi;
		}
		public void setSaldo_equi(BigDecimal saldo_equi) {
			this.saldo_equi = saldo_equi;
		}
		@Override 
		public String toString() {
			return "Cartera [llave=" + llave + ", empresa=" + empresa + ", sucursal=" + sucursal + ", ruc=" + ruc + ", codigo_sip="+codigo_sip+" , razon_social="+razon_social+" , direccion="+direccion+ ", tipo_doc="+tipo_doc+" , factura="+factura+" , fecha_emi="+fecha_emi+" , fecha_venc="+fecha_venc+" , moneda="+moneda+" , importe_og="+importe_og+" ,saldo_act="+saldo_act+" ,saldo_equi="+saldo_equi+ "]";
		}

	}
