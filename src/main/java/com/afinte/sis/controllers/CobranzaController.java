package com.afinte.sis.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.afinte.sis.models.entity.Cobranza;
import com.afinte.sis.models.service.CobranzaService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class CobranzaController {
	// injection dependency
			@Autowired
			private CobranzaService cobranzaService;

			@GetMapping("/cobranza")
			public List<Cobranza> getcobranza() {
				return cobranzaService.getCobranza();
			}
			
			@GetMapping("/cobranza/{cobranzaId}")
			public Cobranza getcobranza(@PathVariable int cobranzaId) {

				Cobranza usuario = cobranzaService.getCobranza(cobranzaId);

				return usuario;
			}
			
			@GetMapping("/cobranza/cliente/{cliente}")
			public List<Cobranza> findByCliente(@PathVariable String cliente){
				return cobranzaService.findByCliente(cliente);
			}
			
			@PostMapping("/cobranza")
			@ResponseStatus(HttpStatus.CREATED)
			public Cobranza addcobranza(@RequestBody Cobranza cobranza) {

				// also just in case the pass an id in JSON ... set id to 0
				// this is force a save of new item ... instead of update

				cobranza.setLlave(null);

				cobranzaService.saveCobranza(cobranza);

				return cobranza;
			}
			
			@PutMapping("/cobranza")
			@ResponseStatus(HttpStatus.CREATED)
			public Cobranza updateUsuario(@RequestBody Cobranza cobranza) {
				
				cobranzaService.saveCobranza(cobranza);
				
				return cobranza;
			}
			@DeleteMapping("/cobranza/{cobranzaId}")
			@ResponseStatus(HttpStatus.NO_CONTENT)
			public void deleteUsuario(@PathVariable int cobranzaId) {
				
				cobranzaService.deleteCobranza(cobranzaId);
			}
}
