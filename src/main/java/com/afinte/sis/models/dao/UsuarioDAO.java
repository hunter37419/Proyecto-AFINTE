package com.afinte.sis.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.afinte.sis.models.entity.UsuarioEntity;;

public interface UsuarioDAO extends CrudRepository<UsuarioEntity, Integer> {

}