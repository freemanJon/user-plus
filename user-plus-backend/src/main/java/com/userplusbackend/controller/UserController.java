package com.userplusbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.userplusbackend.model.User;
import com.userplusbackend.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserRepository _userRepository;
	
	@GetMapping
	public List<User> GetAll() {
		return _userRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public User Post(@RequestBody User user) {
		return _userRepository.save(user);
	}
	
	@PostMapping("/verifyCPF")
	public boolean VerifyCPFExisted(@RequestBody User userVerify) {
		User user = _userRepository.findByCpfIs(userVerify.getCpf());
		if(user == null) {
			return false;
		}
		else {
			return true;
		}
	}
	
	@PostMapping("/verifyTelefone")
	public boolean VerifyTelefoneExisted(@RequestBody User userVerify) {
		User user = _userRepository.findByTelefoneIs(userVerify.getTelefone());
		if(user == null) {
			return false;
		}
		else {
			return true;
		}
	}
	
	@PostMapping("/verifyCodNegocio")
	public boolean VerifyCodNegocioExisted(@RequestBody User userVerify) {
		User user = _userRepository.findByCodNegocioIs(userVerify.getCod_negocio());
		if(user == null) {
			return false;
		}
		else {
			return true;
		}
	}
	
	@GetMapping("/{Id}")
	public User GetById(@PathVariable(value="Id") Long id) {
		return _userRepository.findByCodNegocioIs(id);
	}
	
}
