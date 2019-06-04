package com.afinte.sis.models.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.afinte.sis.models.dao.CustomerDAO;
import com.afinte.sis.models.entity.Customer;
import com.afinte.sis.models.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	// need to inject customer DAO
	@Autowired
	private CustomerDAO customerDAO;

	@Override
	@Transactional(readOnly=true)
	public List<Customer> getCustomers() {
		return (List<Customer>) customerDAO.findAll();
	}

	@Override
	@Transactional
	public void saveCustomer(Customer theCustomer) {

		customerDAO.save(theCustomer);
	}

	@Override
	@Transactional(readOnly=true)
	public Customer getCustomer(Integer theId) {

		return customerDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public void deleteCustomer(Integer theId) {

		customerDAO.deleteById(theId);
	}

}
