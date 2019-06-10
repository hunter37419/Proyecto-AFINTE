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
		private Integer id;
		
		@Column(name="empresa")
		private String empresa;
		
		@Column(name="sucursal")
		private String sucur;
		
		@Column(name="ruc")
		private String ruc;
		
		@Column(name="codigo_sip")
		private int codsip;
		
		@Column(name="razon_social")
		private String razonsoc;
		
		@Column(name="direccion")
		private String dirempre;
		
		@Column(name="tipo_Doc")
		private String tipdoc;
		
		@Column(name="factura")
		private String fac;
		
		@Column(name="fecha_emi")
		private Date fechaemi;
		
		@Column(name="fecha_venc")
		private Date fechavenc;
		
		@Column(name="moneda")
		private String moneda;
		
		@Column(name="importe_og")
		private BigDecimal impog;
		
		@Column(name="saldo_act")
		private BigDecimal saldoact;
		
		@Column(name="saldo_equi")
		private BigDecimal saldoequi;
		
		
		public Cartera() {
			
		}

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id= id;
		}

		
			public String getEmpresa() {
			return empresa;
		}

		public void setEmpresa(String empresa) {
			this.empresa = empresa;
		}

		public String getSucur() {
			return sucur;
		}

		public void setSucur(String sucur) {
			this.sucur = sucur;
		}

		public String getRuc() {
			return ruc;
		}

		public void setRuc(String ruc) {
			this.ruc = ruc;
		}

		public int getCodsip() {
			return codsip;
		}

		public void setCodsip(int codsip) {
			this.codsip = codsip;
		}

		public String getRazonsoc() {
			return razonsoc;
		}

		public void setRazonsoc(String razonsoc) {
			this.razonsoc = razonsoc;
		}

		public String getDirempre() {
			return dirempre;
		}

		public void setDirempre(String dirempre) {
			this.dirempre = dirempre;
		}

		public String getTipdoc() {
			return tipdoc;
		}

		public void setTipdoc(String tipdoc) {
			this.tipdoc = tipdoc;
		}

		public String getFac() {
			return fac;
		}

		public void setFac(String fac) {
			this.fac = fac;
		}

		public Date getFechaemi() {
			return fechaemi;
		}

		public void setFechaemi(Date fechaemi) {
			this.fechaemi = fechaemi;
		}

		public Date getFechavenc() {
			return fechavenc;
		}

		public void setFechavenc(Date fechavenc) {
			this.fechavenc = fechavenc;
		}

		public String getMoneda() {
			return moneda;
		}

		public void setMoneda(String moneda) {
			this.moneda = moneda;
		}

		
		public BigDecimal getImpog() {
			return impog;
		}

		public void setImpog(BigDecimal impog) {
			this.impog = impog;
		}

		public BigDecimal getSaldoact() {
			return saldoact;
		}

		public void setSaldoact(BigDecimal saldoact) {
			this.saldoact = saldoact;
		}

		public BigDecimal getSaldoequi() {
			return saldoequi;
		}

		public void setSaldoequi(BigDecimal saldoequi) {
			this.saldoequi = saldoequi;
		}

		@Override
		public String toString() {
			return "Cartera [id=" + id + ", Empresa=" + empresa + ", sucursal=" + sucur +
					 ", Ruc=" + ruc + ", Codigo_sip="+codsip+" , razon_social="+razonsoc+" , Direccion="+dirempre+" "
					 		+ ", Tipo_Doc="+tipdoc+" , Factura="+fac+" , fecha_emi="+fechaemi+
					 		" , fecha_venc="+fechavenc+" , moneda="+moneda+" , Importe_og="+impog+" ,Saldo_act="+saldoact+" ,Saldo_equi="+saldoequi+ "]";
		}

	}
