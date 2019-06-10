package com.afinte.sis.models.service;

import java.util.List;

import com.afinte.sis.models.entity.Cobranza;

public interface CobranzaService {
	public List<Cobranza> getCobranza();

	public void saveCobranza(Cobranza Cobranza);

	public Cobranza getCobranza(Integer theId);

	public void deleteCobranza(Integer theId);
}
