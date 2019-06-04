package com.afinte.sis.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.afinte.sis.models.entity.Customer;

public interface CustomerDAO extends CrudRepository<Customer, Integer> {

}
