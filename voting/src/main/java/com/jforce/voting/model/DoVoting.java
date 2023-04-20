package com.jforce.voting.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DoVoting {
	
	@Id
    private String phoneNO;
	
    private String nname;
    
    
    
    private String sselect;
    
	public String getName() {
		return nname;
	}
	public void setName(String name) {
		this.nname = name;
	}
	public String getPhoneNo() {
		return phoneNO;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNO = phoneNo;
	}
	public String getSelect() {
		return sselect;
	}
	
	public DoVoting() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DoVoting(String name, String phoneNo, String select) {
		super();
		this.nname = name;
		this.phoneNO = phoneNo;
		this.sselect = select;
	}
	@Override
	public String toString() {
		return "DoVoting [name=" + nname + ", phoneNo=" + phoneNO + ", select=" + sselect + "]";
	}
	public void setSelect(String select) {
		this.sselect = select;
	}
    
}
