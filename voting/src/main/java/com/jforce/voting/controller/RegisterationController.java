package com.jforce.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jforce.voting.model.Login;
import com.jforce.voting.model.Registeration;
import com.jforce.voting.service.RegisterationService;

import jakarta.validation.Valid;

@CrossOrigin(origins="*")
@RestController   //Controller
@RequestMapping("/registeration")
public class RegisterationController {


	@Autowired

	private RegisterationService registerationService;



	@PostMapping("/")
	public ResponseEntity<Registeration> craeteVoter ( @Valid @RequestBody Registeration registeration)  //ResponseBody
	{
		System.out.println("XXXX"+registeration);
		
		System.out.println("****************************");
		
		Registeration createdVoter =registerationService.craeteVoter(registeration);
		//return null;
		return new ResponseEntity<>(createdVoter, HttpStatus.CREATED);
	}


	
	@GetMapping()
	public  ResponseEntity<Registeration> findVoter ( @RequestBody Login logg)
	{
		System.out.println("finding registered object");
		Registeration registeredCustomer=	registerationService.RegisteredCustomerDeatils(logg);
		
		return  ResponseEntity.ok(registeredCustomer);
		
	}

}