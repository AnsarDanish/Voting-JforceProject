package com.jforce.voting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jforce.voting.model.Registeration;



public interface RegisterationRepo extends JpaRepository<Registeration, String>
{
	// we are making our repository to Jpa repository

}
