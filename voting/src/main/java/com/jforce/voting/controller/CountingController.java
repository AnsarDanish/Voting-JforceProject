package com.jforce.voting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jforce.voting.model.DoVoting;
import com.jforce.voting.model.Registeration;
import com.jforce.voting.service.CountingService;
import com.jforce.voting.utility.Candidate;

@CrossOrigin(origins="*")  
@RestController
@RequestMapping("/count")
public class CountingController {
	
	
	@Autowired
	private CountingService countingService;
	
	
	@PostMapping("/")
	public  ResponseEntity <Candidate> Count()
	{
		Candidate cd =countingService.Count();
		
		 return new ResponseEntity<>(cd, HttpStatus.OK);
		
	}
	
//	@GetMapping("pathVar/{name}/{age}")
//	public ModelAndView pathVariables(@PathVariable String name, @PathVariable int age) {
//		
//		ModelAndView modelAndView = new ModelAndView();
//		
//		//setting model data
//		modelAndView.addObject("welMsg", "Welcome to Spring MVC user " + name + " and age: " + age);			//request.setAttribute();
//		modelAndView.addObject("balance", 50000);
//		
//		//setting view english name
//		modelAndView.setViewName("welcome");
//		
//		
//		return modelAndView;
//		
//	}
	
	//@GetMapping("pathVar/{candidateName}")
	@GetMapping("/{candidateName}")
	//public ResponseEntity <List<DoV>>
	 public ResponseEntity <List<DoVoting>>   getVoterList( @PathVariable String candidateName) 
	 {
		System.out.println("counting cadidate wise url calling");
		  List list = countingService.getVoterList(candidateName);
		  
		  return new ResponseEntity<>(list, HttpStatus.OK);
	 }
}
