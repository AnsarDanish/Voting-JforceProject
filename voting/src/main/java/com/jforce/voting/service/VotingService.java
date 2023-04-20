package com.jforce.voting.service;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jforce.voting.dao.VotingDao;
import com.jforce.voting.model.DoVoting;

@Service
public class VotingService {
	
	@Autowired
	private VotingDao votingdao;
	
 
	public DoVoting createVoting (DoVoting  dv)
	{
		DoVoting dovoting = null;
		try {
			dovoting = votingdao.createVoting(dv);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	    return dovoting;
	}

}
