package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.afinte.sis.models.dao.CarteraDAO;
import com.afinte.sis.models.service.CarteraService;
import com.afinte.sis.models.entity.Cartera;

@Service
public class CarteraServicelmpl implements CarteraService {

	// need to inject cartera DAO
		@Autowired
		private CarteraDAO carteraDAO;
		
		@Override
		@Transactional(readOnly = true)
		public List<Cartera> getCarteras(){
			return (List<Cartera>) carteraDAO.findAll();
		}
		


		@Override
		@Transactional
		public void saveCarteras(Cartera theCartera) {
			carteraDAO.save(theCartera);
			
		}



		@Override
		@Transactional
		public Cartera getCartera(Integer theId) {
			// TODO Auto-generated method stub
			return carteraDAO.findById(theId).get();
		}



		@Override
		@Transactional
		public void deleteCartera(Integer theId) {

          carteraDAO.deleteById(theId);
			
		}

		@Override
		@Transactional
		public List<Cartera> findByRucAndCodigosip(String ruc, Integer codigosip) {
			// TODO Auto-generated method stub
			return (List<Cartera>) carteraDAO.findByRucAndCodigosip( ruc, codigosip);
		}

		@Override
		@Transactional
		public List<Cartera> findByRuc(String ruc) {
			// TODO Auto-generated method stub
			return (List<Cartera>) carteraDAO.findByRucStartingWith(ruc);
		}
}
