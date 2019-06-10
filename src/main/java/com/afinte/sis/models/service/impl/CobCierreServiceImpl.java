package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.afinte.sis.models.dao.CobCierreDAO;
import com.afinte.sis.models.entity.Cartera;
import com.afinte.sis.models.entity.CobCierre;
import com.afinte.sis.models.service.CobCierreService;

@Service
public class CobCierreServiceImpl implements CobCierreService {

	
	
	@Autowired
	private CobCierreDAO cobcierreDAO;
	
	@Override
	@Transactional(readOnly = true)
	public List<CobCierre> getCobCierres() {
		// TODO Auto-generated method stub
		return (List<CobCierre>) cobcierreDAO.findAll();
	}

	@Override
	@Transactional
	public void saveCobCierre(CobCierre theCobCierre) {
		// TODO Auto-generated method stub
		cobcierreDAO.save(theCobCierre);
		
	}

	@Override
	@Transactional
	public CobCierre getCobCierre(Integer theId) {
		// TODO Auto-generated method stub
		return cobcierreDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public void deleteCobCierre(Integer theId) {
		// TODO Auto-generated method stub
		cobcierreDAO.deleteById(theId);
		
	}
	

}
