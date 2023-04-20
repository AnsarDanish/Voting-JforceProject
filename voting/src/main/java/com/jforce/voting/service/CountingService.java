package com.jforce.voting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jforce.voting.controller.CountingController;
import com.jforce.voting.dao.CountingRepo;
import com.jforce.voting.model.DoVoting;
import com.jforce.voting.utility.Candidate;

@Service
public class CountingService {
	
	
	@Autowired
	private CountingRepo countingRepo;
	
	public Candidate Count()
	{
		
		 return countingRepo.Count();
	}
	
//	 public List<DoVoting>   getVoterLis t( String candidateName) 
//	 {
//		  return countingRepo.getVoterList(candidateName);
//	 }

	public List getVoterList(String candidateName) {
		// TODO Auto-generated method stub
		return  countingRepo.getVoterList(candidateName);
	}

}
