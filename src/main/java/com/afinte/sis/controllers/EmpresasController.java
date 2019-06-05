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
import com.afinte.sis.models.entity.Empresas;
import com.afinte.sis.models.service.EmpresaService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class EmpresasController {
	// injection dependency
			@Autowired
			private EmpresaService empresaService;

			@GetMapping("/empresa")
			public List<Empresas> getEmpresa() {
				return empresaService.getEmpresa();
			}
			
			@GetMapping("/empresa/{empresaId}")
			public Empresas getEmpresa(@PathVariable int empresaId) {

				Empresas usuario = empresaService.getEmpresa(empresaId);

				return usuario;
			}
			
			@PostMapping("/empresa")
			@ResponseStatus(HttpStatus.CREATED)
			public Empresas addEmpresa(@RequestBody Empresas empresa) {

				// also just in case the pass an id in JSON ... set id to 0
				// this is force a save of new item ... instead of update

				empresa.setId(null);

				empresaService.saveEmpresa(empresa);

				return empresa;
			}
			
			@PutMapping("/empresa")
			@ResponseStatus(HttpStatus.CREATED)
			public Empresas updateUsuario(@RequestBody Empresas empresa) {
				
				empresaService.saveEmpresa(empresa);
				
				return empresa;
			}
			@DeleteMapping("/empresa/{empresaId}")
			@ResponseStatus(HttpStatus.NO_CONTENT)
			public void deleteUsuario(@PathVariable int empresaId) {
				
				empresaService.deleteEmpresa(empresaId);
			}
}
