package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.afinte.sis.models.dao.CobranzaDAO;
import com.afinte.sis.models.entity.Cobranza;
import com.afinte.sis.models.service.CobranzaService;

@Service
public class CobranzaServiceImpl implements CobranzaService {
	// need to inject customer DAO
	@Autowired
	private CobranzaDAO CobranzaDAO;

	@Override
	@Transactional(readOnly=true)
	public List<Cobranza> getCobranza() {
		return (List<Cobranza>) CobranzaDAO.findAll();
	}

	@Override
	@Transactional
	public void saveCobranza(Cobranza Cobranzas) {

		CobranzaDAO.save(Cobranzas);
	}

	@Override
	@Transactional(readOnly=true)
	public Cobranza getCobranza(Integer theId) {

		return CobranzaDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public void deleteCobranza(Integer theId) {

		CobranzaDAO.deleteById(theId);
	}

	@Override
	@Transactional
	public List<Cobranza> findByCliente(String cliente) {
		// TODO Auto-generated method stub
		return CobranzaDAO.findByClienteContainingIgnoreCase(cliente);
	}
}
