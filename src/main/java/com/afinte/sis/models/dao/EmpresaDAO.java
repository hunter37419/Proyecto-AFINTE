package com.afinte.sis.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.afinte.sis.models.entity.Empresas;

public interface EmpresaDAO extends CrudRepository<Empresas, Integer> {

}
