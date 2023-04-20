package com.jforce.voting.utility;

public class Candidate {
	private int c1;
	private int c2;
	private int c3;
	private int c4;
	public Candidate(int c1, int c2, int c3, int c4) {
		super();
		this.c1 = c1;
		this.c2 = c2;
		this.c3 = c3;
		this.c4 = c4;
	}
	public Candidate() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Candidate [c1=" + c1 + ", c2=" + c2 + ", c3=" + c3 + ", c4=" + c4 + "]";
	}
	public int getC1() {
		return c1;
	}
	public void setC1(int c1) {
		this.c1 = c1;
	}
	public int getC2() {
		return c2;
	}
	public void setC2(int c2) {
		this.c2 = c2;
	}
	public int getC3() {
		return c3;
	}
	public void setC3(int c3) {
		this.c3 = c3;
	}
	public int getC4() {
		return c4;
	}
	public void setC4(int c4) {
		this.c4 = c4;
	}
	
	
	

}
