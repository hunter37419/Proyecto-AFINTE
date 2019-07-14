package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.afinte.sis.models.dao.EmpresaDAO;
import com.afinte.sis.models.entity.Empresas;
import com.afinte.sis.models.service.EmpresaService;

@Service
public class EmpresaServiceImpl implements EmpresaService {
	// need to inject customer DAO
	@Autowired
	private EmpresaDAO empresaDAO;

	@Override
	@Transactional(readOnly=true)
	public List<Empresas> getEmpresa() {
		return (List<Empresas>) empresaDAO.findAll();
	}

	@Override
	@Transactional
	public void saveEmpresa(Empresas Empresas) {

		empresaDAO.save(Empresas);
	}

	@Override
	@Transactional(readOnly=true)
	public Empresas getEmpresa(Integer theId) {

		return empresaDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public void deleteEmpresa(Integer theId) {

		empresaDAO.deleteById(theId);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Empresas> findByRuc(String ruc) {
		// TODO Auto-generated method stub
		return empresaDAO.findByRucStartingWith(ruc);
	}

}
