package com.jforce.voting.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jforce.voting.model.Login;
import com.jforce.voting.model.Registeration;

import javax.sql.DataSource;
@Repository
public class LoginRepo {
	
	@Autowired
	private DataSource mySQLDataSource;
	
	
	public Registeration loginValidation(Login logg) {
		
		try(Connection connection = mySQLDataSource.getConnection();
			PreparedStatement pstmt = connection.prepareStatement("select * from  registeration where name=? and password=? ");
				){
			
			
			pstmt.setString(1,logg.getLoginName());
			pstmt.setString(2, logg.getLoginPassword());
			
			
	        ResultSet rs	=	pstmt.executeQuery();
	        Registeration reg= new Registeration();
	        while(rs.next())
	        {
	        	reg.setPhoneNO(rs.getString("phoneno"));
	        	reg.setEmail(rs.getString("email"));
	        	reg.setName(rs.getString("name"));
	        	reg.setPassword(rs.getString("password"));
	          reg.setStatus(rs.getString("status"));
	        	
	        }
	        System.out.println("login repo" + " "+ reg);
	        return reg;
			
		}catch (SQLException e) {
			e.printStackTrace();
		}
		
		 return null;
	}
	

}
