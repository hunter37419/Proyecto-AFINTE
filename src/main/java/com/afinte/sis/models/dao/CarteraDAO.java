package com.afinte.sis.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.afinte.sis.models.entity.Cartera;

public interface CarteraDAO extends CrudRepository<Cartera, Integer> {
	
	List<Cartera> findByRucStartingWith(String ruc);

}
