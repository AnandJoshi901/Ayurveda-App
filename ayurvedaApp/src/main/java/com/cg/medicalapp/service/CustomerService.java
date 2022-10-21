package com.cg.medicalapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.medicalapp.entity.Customer;

@Service
public interface CustomerService {

	public Customer addCustomer(Customer customer);
	public Customer removeCustomer(Customer customer);
	public Customer viewCustomer(Customer c);
	public Customer updateCustomer(Customer c);
	public List<Customer> viewAllCustomer();
	
}
