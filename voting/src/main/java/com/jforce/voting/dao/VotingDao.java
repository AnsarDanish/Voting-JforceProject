package com.jforce.voting.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jforce.voting.model.DoVoting;

@Repository
public class VotingDao {
	
	
	@Autowired
	private DataSource mySQLDataSource;
	
	public DoVoting createVoting (DoVoting  dv) throws SQLException
	{
		String result=null;
		
		  DoVoting dovoting = new DoVoting();
		  dovoting.setPhoneNo("null");
		  dovoting.setName("null");
		  dovoting.setSelect("null");
		  
		try(Connection connection = mySQLDataSource.getConnection();
				
					){
			PreparedStatement pstmt = connection.prepareStatement("select * from do_voting  where phoneno = ?");
			pstmt.setString(1,dv.getPhoneNo());
			
		  ResultSet rs=	pstmt.executeQuery();  //null
		 // System.out.println(rs.next()+" rsult set object");
		  if(rs.next())
		  {
			  System.out.println("yes it is going to inside");
			  dovoting.setPhoneNo(rs.getString(1));
			  dovoting.setName(rs.getString(2));
			  dovoting.setSelect(rs.getString(3));
			  return dovoting;
			  
		  }
			 
		  
		  else
		  {
			   pstmt = connection.prepareStatement("insert into do_voting values (?,?,?)");
			  pstmt.setString(1,dv.getPhoneNo());
			  pstmt.setString(2,dv.getName());
			  pstmt.setString(3,dv.getSelect());
			   int i= pstmt.executeUpdate();
			   
			  if(i>0)
			  {
				 
				  return dovoting;
			  }
			 
		 }
		  
		}
		return dovoting;
	
		
	}
	


}
