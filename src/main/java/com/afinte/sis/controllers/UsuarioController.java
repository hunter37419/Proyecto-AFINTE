package com.afinte.sis.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.afinte.sis.models.entity.Customer;
import com.afinte.sis.models.entity.UsuarioEntity;
import com.afinte.sis.models.service.CustomerService;
import com.afinte.sis.models.service.UsuarioService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UsuarioController {
	// injection dependency
		@Autowired
		private UsuarioService usuarioService;

		@GetMapping("/usuario")
		public List<UsuarioEntity> getCustomers() {
			return usuarioService.getUsuario();
		}
		
		@GetMapping("/usuario/{usuarioId}")
		public UsuarioEntity getUsuario(@PathVariable int usuarioId) {

			UsuarioEntity usuario = usuarioService.getUsuario(usuarioId);

			return usuario;
		}
		
		@PostMapping("/usuario")
		@ResponseStatus(HttpStatus.CREATED)
		public UsuarioEntity addUsuario(@RequestBody UsuarioEntity usuario) {

			// also just in case the pass an id in JSON ... set id to 0
			// this is force a save of new item ... instead of update

			usuario.setId(null);

			usuarioService.saveUsuario(usuario);

			return usuario;
		}
		
		@PutMapping("/usuario")
		@ResponseStatus(HttpStatus.CREATED)
		public UsuarioEntity updateUsuario(@RequestBody UsuarioEntity usuario) {
			
			usuarioService.saveUsuario(usuario);
			
			return usuario;
		}
		@DeleteMapping("/usuario/{usuarioId}")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void deleteUsuario(@PathVariable int usuarioId) {
			
			usuarioService.deleteUsuario(usuarioId);
		}
}
