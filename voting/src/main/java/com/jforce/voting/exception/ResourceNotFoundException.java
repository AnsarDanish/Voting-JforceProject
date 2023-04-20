package com.jforce.voting.exception;

public class ResourceNotFoundException extends RuntimeException{
	
	String resourceName;
	String feildName;
	
	                              
	public ResourceNotFoundException(String resourceName ,String feildName)
	{
		super(String.format("%s not found with %s ",resourceName,feildName));
		
		this.resourceName=resourceName;
		this.feildName=feildName;
		
	}
	
	public ResourceNotFoundException(String resourceName )
	{
		super(String.format("%s",resourceName));
		
		this.resourceName=resourceName;
		
		
		
	}

}
