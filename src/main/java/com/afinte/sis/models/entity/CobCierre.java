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
@Table(name="COBCIERRE")
public class CobCierre {

		    @Id
			@GeneratedValue(strategy=GenerationType.IDENTITY)
			@Column(name="llave")
			private Integer id;
			
			@Column(name="numero_recibo")
			private String numero_recibo;
			
			@Column(name="fecha_cobro")
			private Date fecha_cobro;
			
			@Column(name="numero_cliente ")
			private int numero_cliente ;
			
			@Column(name="nombre_pagador")
			private String nombre_pagador ;
			
			@Column(name="codigo_moneda")
			private String codigo_moneda;
			
			@Column(name="importe_cobro")
			private Double importe_cobro;
			
			@Column(name="div_basica")
			private String Div_basica;
			
			@Column(name="importe_recibido_divisa")
			private BigDecimal Importe_Recibido_Divisa;
			
			@Column(name="tipo_cambio")
			private BigDecimal tipo_cambio;
			
			@Column(name="numero_batch")
			private BigDecimal batch;
			
			@Column(name="fecha_batch")
			private Double fechabatch;
			
			
			
			
			public  CobCierre() {
			
				
			}

			public Integer getId() {
				return id;
			}

			public void setId(Integer id) {
				this.id = id;
			}

			
			
			public String getNumero_recibo() {
				return numero_recibo;
			}

			public void setNumero_recibo(String numero_recibo) {
				this.numero_recibo = numero_recibo;
			}

			public Date getFecha_cobro() {
				return fecha_cobro;
			}

			public void setFecha_cobro(Date fecha_cobro) {
				this.fecha_cobro = fecha_cobro;
			}

			public int getNumero_cliente() {
				return numero_cliente;
			}

			public void setNumero_cliente(int numero_cliente) {
				this.numero_cliente = numero_cliente;
			}

			public String getNombre_pagador() {
				return nombre_pagador;
			}

			public void setNombre_pagador(String nombre_pagador) {
				this.nombre_pagador = nombre_pagador;
			}

			public String getCodigo_moneda() {
				return codigo_moneda;
			}

			public void setCodigo_moneda(String codigo_moneda) {
				this.codigo_moneda = codigo_moneda;
			}

			public Double getImporte_cobro() {
				return importe_cobro;
			}

			public void setImporte_cobro(Double importe_cobro) {
				this.importe_cobro = importe_cobro;
			}

			public String getDiv_basica() {
				return Div_basica;
			}

			public void setDiv_basica(String div_basica) {
				Div_basica = div_basica;
			}

			

			public BigDecimal getImporte_Recibido_Divisa() {
				return Importe_Recibido_Divisa;
			}

			public void setImporte_Recibido_Divisa(BigDecimal importe_Recibido_Divisa) {
				Importe_Recibido_Divisa = importe_Recibido_Divisa;
			}

			public BigDecimal getTipo_cambio() {
				return tipo_cambio;
			}

			public void setTipo_cambio(BigDecimal tipo_cambio) {
				this.tipo_cambio = tipo_cambio;
			}

			public BigDecimal getBatch() {
				return batch;
			}

			public void setBatch(BigDecimal batch) {
				this.batch = batch;
			}

			public Double getFechabatch() {
				return fechabatch;
			}

			public void setFechabatch(Double fechabatch) {
				this.fechabatch = fechabatch;
			}

			@Override
			public String toString() {
				return "COBCIERRE [id=" + id + ", numero_recibo=" + numero_recibo+ ", fecha_cobro=" + fecha_cobro  +
						 ", numero_cliente=" + numero_cliente + ", nombre_pagador="+nombre_pagador+" , codigo_moneda="+codigo_moneda+" , importe_cobro="+importe_cobro+" "
						 		+ ", Div_basica="+Div_basica+" , Importe_Recibido_Divisa="+Importe_Recibido_Divisa+" ,tipo_cambio="+tipo_cambio+",batch="+batch +" , fechabatch="+fechabatch+"]";
			}

}
