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
import com.afinte.sis.models.service.CarteraService;


@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class CarteraController {

	@Autowired
	private CarteraService carteraService;
	
	@GetMapping("/carteras")
	public List<Cartera> getCarteras(){
		return carteraService.getCarteras();
	}
	
	@GetMapping("/carteras/{carteraId}")
	public Cartera getcartera(@PathVariable int carteraId) {

		Cartera cartera = carteraService.getCartera(carteraId);

		return cartera;
	}
	
	@GetMapping("/carteras/ruc/{ruc}")
	public List<Cartera> findByRuc(@PathVariable String ruc){
		return carteraService.findByRuc(ruc);
	}
	
	@GetMapping("/carteras/{ruc}/{codigosip}")
	public List<Cartera> findByRuc(@PathVariable String ruc,
	                        		@PathVariable Integer codigosip){
		return carteraService.findByRucAndCodigosip( ruc, codigosip);
	}

	// add mapping for POST /cobcierre - add new cobcierre

	@PostMapping("/carteras")
	@ResponseStatus(HttpStatus.CREATED)
	public Cartera addCartera(@RequestBody Cartera cartera) {

		// also just in case the pass an id in JSON ... set id to 0
		// this is force a save of new item ... instead of update

		cartera.setLlave(null);

		carteraService.saveCarteras(cartera);

		return cartera;
	}
	
	// add mapping for PUT /cobcierre - update existing cobcierre
	
	@PutMapping("carteras")
	@ResponseStatus(HttpStatus.CREATED)
	public Cartera updateCartera(@RequestBody Cartera cartera) {
		
		carteraService.saveCarteras(cartera);
		
		return cartera;
	}
	
	
	//add mapping for DELETE /cobcierres/{cobcierreId} - delete existing cobcierre
	@DeleteMapping("/carteras/{carteraId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteCobcierre(@PathVariable int carteraId) {
		
		carteraService.deleteCartera(carteraId);
	}


}
