package com.afinte.sis.models.service;

import java.util.List;

import com.afinte.sis.models.entity.Cartera;


public interface CarteraService {
	public List<Cartera> getCarteras();

	public void saveCarteras(Cartera theCartera);

	public Cartera getCartera(Integer theId);

	public void deleteCartera(Integer theId);
}
