package com.afinte.sis.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.afinte.sis.models.entity.Cobranza;

public interface CobranzaDAO extends CrudRepository<Cobranza, Integer> {

	List<Cobranza> findByClienteContainingIgnoreCase(String cliente);
	
}
