package com.jforce.voting.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jforce.voting.model.Registeration;
import com.jforce.voting.utility.Candidate;
import com.jforce.voting.model.DoVoting;

@Repository
public class CountingRepo {
	
	@Autowired
	private DataSource mySQLDataSource;
	
	
	public Candidate Count()
	{
		 Candidate cd = new Candidate();
		try(Connection connection = mySQLDataSource.getConnection();
				
					){
				
				
			
				PreparedStatement pstmt = connection.prepareStatement("select  count(do_voting.sselect) , candidateList.sselect from do_voting , candidateList where do_voting.sselect=candidateList.sselect  group by candidateList.sselect ");
				ResultSet rs	=	pstmt.executeQuery();
				
				while(rs.next())
				{
					System.out.println(rs.getString("sselect")+ " "+rs.getInt("count(do_voting.sselect)") );
			    switch(rs.getString("sselect"))
				    {
				    case "Jill":  cd.setC1(rs.getInt("count(do_voting.sselect)"));
				                    break;
				    case "Jess":  cd.setC2(rs.getInt("count(do_voting.sselect)"));;
                    break;
                  
				    case "John":  cd.setC3(rs.getInt("count(do_voting.sselect)"));;
                    break;
                    
				    case "Jack": cd.setC4(rs.getInt("count(do_voting.sselect)"));;
                        break;
				    }
				}
				
				System.out.println("counting repo "+cd);

		}
		catch (SQLException e) {
			e.printStackTrace();
		}		
	   return cd;     
			}
	
	
	    public List<DoVoting>   getVoterList(String candidateName)
	    {
	    	List<DoVoting> list = new ArrayList<>();
	    	try(Connection connection = mySQLDataSource.getConnection();
					
					){
	    		
	    		PreparedStatement pstmt = connection.prepareStatement("select * from do_voting where sselect=? ");
	    		pstmt.setString(1, candidateName);
	    		ResultSet rs	=	pstmt.executeQuery();
	    		while(rs.next())
	    		{
	    			DoVoting doVoting = new DoVoting();
	    			doVoting.setName(rs.getString("nname"));
	    			doVoting.setPhoneNo(rs.getString("phoneno"));
	    			doVoting.setSelect(rs.getString("sselect"));
	    			list.add(doVoting);
	    		}
	    	
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
	    	
	    	
	    	
	    	System.out.println("repo of list  "+list);
	    	return list;
	    }
	
	
	

}
