package com.afinte.sis.models.service;

import java.util.List;

import com.afinte.sis.models.entity.UsuarioEntity;;

public interface UsuarioService {
	public List<UsuarioEntity> getUsuario();

	public void saveUsuario(UsuarioEntity Usuario);

	public UsuarioEntity getUsuario(Integer theId);

	public void deleteUsuario(Integer theId);
}
