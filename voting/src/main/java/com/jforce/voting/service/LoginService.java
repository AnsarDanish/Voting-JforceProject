package com.jforce.voting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jforce.voting.dao.LoginRepo;
import com.jforce.voting.dao.RegisterationRepo;
import com.jforce.voting.model.Login;
import com.jforce.voting.model.Registeration;


@Service
public class LoginService {
	
	@Autowired
	private LoginRepo loginRepo;
	
	public Registeration loginValidation(Login login)
	{
		
	//	Registeration registeredVoter =registerationRepo.findById(login.getLoginName()).orElseThrow(()-> new RuntimeException());
		
//	Registeration registeredVoter =registerationRepo.findById(login.getLoginName()).orElseThrow(()-> new RuntimeException());
		//  System.out.println("registered voter ");
		Registeration registeredVoter=	loginRepo.loginValidation(login);
		
		
		return registeredVoter;
		
	}

}
