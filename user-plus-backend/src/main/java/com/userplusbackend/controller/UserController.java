package com.userplusbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
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
		List<User> users = _userRepository.findAll();
		for(User user:users) {
			if(user.getCpf().equals(userVerify.getCpf())) {
				return true;
			}
		}
		
		return false;
	}
	
	@PostMapping("/verifyTelefone")
	public boolean VerifyTelefoneExisted(@RequestBody User userVerify) {
		List<User> users = _userRepository.findAll();
		for(User user:users) {
			if(user.getTelefone().equals(userVerify.getTelefone())) {
				return true;
			}
		}
		
		return false;
	}
	
	@PostMapping("/verifyCodNegocio")
	public boolean VerifyCodNegocioExisted(@RequestBody User userVerify) {
		List<User> users = _userRepository.findAll();
		for(User user:users) {
			if(user.getCod_negocio().equals(userVerify.getCod_negocio())) {
				return true;
			}
		}
		
		return false;
	}
}
