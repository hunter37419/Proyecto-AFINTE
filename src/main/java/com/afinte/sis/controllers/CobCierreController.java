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

import com.afinte.sis.models.entity.Cartera;
import com.afinte.sis.models.entity.CobCierre;
import com.afinte.sis.models.service.CobCierreService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")

public class CobCierreController {
	
	@Autowired
	private CobCierreService cobcierreService;
	
	@GetMapping("/cobcierres")
	public List<CobCierre> getCarteras(){
		return cobcierreService.getCobCierres();
	}

	@GetMapping("/cobcierre/{cierreId}")
	public CobCierre getCobCierre(@PathVariable int cierreId) {

		CobCierre cobcierre = cobcierreService.getCobCierre(cierreId);

		return cobcierre;
	}

	// add mapping for POST /cobcierre - add new cobcierre

	@PostMapping("/cobcierres")
	@ResponseStatus(HttpStatus.CREATED)
	public CobCierre addCobCierre(@RequestBody CobCierre cobcierre) {

		// also just in case the pass an id in JSON ... set id to 0
		// this is force a save of new item ... instead of update

		cobcierre.setId(null);

		cobcierreService.saveCobCierre(cobcierre);

		return cobcierre;
	}
	
	// add mapping for PUT /cobcierre - update existing cobcierre
	
	@PutMapping("/cobcierres")
	@ResponseStatus(HttpStatus.CREATED)
	public CobCierre updateCobCierre(@RequestBody CobCierre cobcierre) {
		
		cobcierreService.saveCobCierre(cobcierre);
		
		return cobcierre;
	}
	
	
	//add mapping for DELETE /cobcierres/{cobcierreId} - delete existing cobcierre
	@DeleteMapping("/cobcierres/{cobcierreId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCobcierre(@PathVariable int cobcierreId) {
		
		cobcierreService.deleteCobCierre(cobcierreId);
	}

	
}
