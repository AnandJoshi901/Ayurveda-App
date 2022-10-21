package com.cg.medicalapp.controller;

import java.util.List;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.medicalapp.entity.Customer;
import com.cg.medicalapp.exception.RecordNotFoundException;
import com.cg.medicalapp.service.CartService;
import com.cg.medicalapp.service.CustomerService;

@RestController
@RequestMapping("/medical")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CartService cartService;

	@PostMapping("/addcustomer")
	public ResponseEntity<Customer> addCustomer(@Valid @RequestBody Customer customer) {
		customer = customerService.addCustomer(customer);
		cartService.createCart(customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
	}

	@DeleteMapping("/customer/{customerId}")
	public ResponseEntity<Customer> removeCustomer(@PathVariable("customerId") Integer customerId) {
		Customer customer = new Customer();
		customer.setCustomerId(customerId);
		customer = customerService.removeCustomer(customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
	}

	@GetMapping("/customer/{customerId}")
	public ResponseEntity<Customer> viewCustomerBycustomerId(@PathVariable("customerId") Integer customerId)
			throws RecordNotFoundException { 
		Customer customer = new Customer();
		customer.setCustomerId(customerId);
		Customer customer1 = customerService.viewCustomer(customer);
		return new ResponseEntity<>(customer1, HttpStatus.OK);
	}

	@PutMapping("/customer")
	public ResponseEntity<Customer> updateCustomer(@Valid @RequestBody Customer customer)
			throws RecordNotFoundException {
		customer = customerService.updateCustomer(customer);
		return new ResponseEntity<>(customer, HttpStatus.OK);
	}

	@GetMapping("/viewcustomers")
	public ResponseEntity<List<Customer>> viewAllCustomer() throws RecordNotFoundException {
		List<Customer> customerList = customerService.viewAllCustomer();
		return new ResponseEntity<>(customerList, HttpStatus.OK);
	}
	
}
