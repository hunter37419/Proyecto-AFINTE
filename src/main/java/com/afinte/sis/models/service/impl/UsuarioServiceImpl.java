package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.afinte.sis.models.dao.CustomerDAO;
import com.afinte.sis.models.dao.UsuarioDAO;
import com.afinte.sis.models.entity.Customer;
import com.afinte.sis.models.entity.UsuarioEntity;
import com.afinte.sis.models.service.UsuarioService;;

@Service
public class UsuarioServiceImpl  implements UsuarioService{
	@Autowired
	private UsuarioDAO usuarioDAO;

	@Override
	@Transactional(readOnly=true)
	public List<UsuarioEntity> getUsuario() {
		return (List<UsuarioEntity>) usuarioDAO.findAll();
	}
	@Override
	@Transactional
	public void saveUsuario(UsuarioEntity usuario) {

		usuarioDAO.save(usuario);
	}
	@Override
	@Transactional(readOnly=true)
	public UsuarioEntity getUsuario(Integer theId) {

		return usuarioDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public void deleteUsuario(Integer theId) {

		usuarioDAO.deleteById(theId);
	}

}
