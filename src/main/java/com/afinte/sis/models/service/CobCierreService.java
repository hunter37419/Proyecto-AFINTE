package com.afinte.sis.models.service;

import java.util.List;

import com.afinte.sis.models.entity.Cartera;
import com.afinte.sis.models.entity.CobCierre;

public interface CobCierreService {
	public List<CobCierre> getCobCierres();

	public void saveCobCierre(CobCierre theCobCierre);

	public CobCierre getCobCierre(Integer theId);

	public void deleteCobCierre(Integer theId);
}
