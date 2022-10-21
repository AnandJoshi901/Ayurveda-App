package com.cg.medicalapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.medicalapp.entity.Customer;
import com.cg.medicalapp.exception.RecordExistsException;
import com.cg.medicalapp.exception.RecordNotFoundException;
import com.cg.medicalapp.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired 
	CustomerRepository customerRepository;
	
	@Override
	public Customer addCustomer(Customer customer) throws RecordExistsException{
		Optional<Customer> customer1 = customerRepository.findById(customer.getCustomerId());
		if(customer1.isPresent()) {

			throw new RecordExistsException("Customer already found");
		}
		customer = customerRepository.save(customer);
		return customer;
	}
	
	@Override
	public Customer removeCustomer(Customer customer) {
		
		Optional<Customer> checkCustomer = customerRepository.findById(customer.getCustomerId());
		if(!checkCustomer.isPresent())
		{
			throw new RecordNotFoundException("Record Not Found");
		}
		
		customer = checkCustomer.get();
		customerRepository.delete(customer);

		return customer;
	}

	@Override
	public Customer viewCustomer(Customer customer) throws RecordNotFoundException {
		
		Optional<Customer> repoCustomer = customerRepository.findById(customer.getCustomerId());

		if (repoCustomer.isEmpty()) {
			throw new RecordNotFoundException("Customer Not Found");
		}

		return repoCustomer.get();
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		Optional<Customer> checkCustomer = customerRepository.findById(customer.getCustomerId());
		if (checkCustomer.isEmpty()) {
			throw new RecordNotFoundException("Given customer is not found");
		}

		customer = customerRepository.save(customer);
		return customer;
	}

	@Override
	public List<Customer> viewAllCustomer() {
		
		List<Customer> customerList = customerRepository.findAll();
		
		if(customerList.isEmpty())
		{
			throw new RecordNotFoundException("No customer found");
		}
		return customerList;
	}
	

}
