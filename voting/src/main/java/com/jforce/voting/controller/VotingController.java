package com.jforce.voting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jforce.voting.model.DoVoting;
import com.jforce.voting.model.Login;
import com.jforce.voting.model.Registeration;
import com.jforce.voting.service.VotingService;

@CrossOrigin(origins="*")  
@RestController
@RequestMapping("/voting")
public class VotingController {
	
	
	@Autowired
	private VotingService votingService;
	
	
	
	
	
	@PostMapping("/")
	public ResponseEntity<DoVoting> doVoting1 (@RequestBody DoVoting dv)
	{
		System.out.println("voting object in controller "+dv);
		//Registeration createdCustomer =registerationService.createCustomer(registeration);
		//return null;
		
		DoVoting  dovoting=	votingService.createVoting(dv);
				
	  System.out.println(" repo voting voting" + " "+dovoting);
	   return new ResponseEntity<>(dovoting, HttpStatus.OK);
	}

}
