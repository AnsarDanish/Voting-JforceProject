package com.jforce.voting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jforce.voting.dao.RegisterationRepo;
import com.jforce.voting.exception.ResourceNotFoundException;
import com.jforce.voting.model.Login;
import com.jforce.voting.model.Registeration;



@Service
public class RegisterationService {
	
	@Autowired
	private RegisterationRepo registerationRepo;
	
	//add reg
	 
	public Registeration craeteVoter (Registeration registeration)
	{
		System.out.println(registeration);
		
			Registeration registered=registerationRepo.save(registeration);
			return registered;
   }
	
	

	
	public Registeration  RegisteredCustomerDeatils (Login logg)
	{
		String userName=logg.getLoginName();
		
		Registeration registredCustomer = registerationRepo.findById(userName).orElseThrow(()-> new ResourceNotFoundException("Invalid Voter"));
		
		return registredCustomer;
		
	}



	
	 
	// 

}