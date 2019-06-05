package com.afinte.sis.models.service;

import java.util.List;

import com.afinte.sis.models.entity.Empresas;

public interface EmpresaService {
	public List<Empresas> getEmpresa();

	public void saveEmpresa(Empresas Empresa);

	public Empresas getEmpresa(Integer theId);

	public void deleteEmpresa(Integer theId);
}
