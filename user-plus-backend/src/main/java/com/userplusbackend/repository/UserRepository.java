package com.userplusbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.userplusbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByTelefoneIs(Long telefone);
	User findByCpfIs(Long cpf);
	User findByCodNegocioIs(Long codNegocio);
	
}
