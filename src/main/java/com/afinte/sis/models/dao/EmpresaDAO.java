package com.afinte.sis.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.afinte.sis.models.entity.Empresas;

@Repository
public interface EmpresaDAO extends CrudRepository<Empresas, Integer> {
	
	List<Empresas> findByRucStartingWith(String ruc);
	
}
