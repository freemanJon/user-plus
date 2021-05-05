package com.userplusbackend.model;

import javax.persistence.*;

@Entity
public class User {
	
	@Id
	private Long codNegocio;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private Long cpf;
	@Column(nullable = false)
	private Long telefone;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Long getCpf() {
		return cpf;
	}
	public void setCpf(Long cpf) {
		this.cpf = cpf;
	}
	public Long getTelefone() {
		return telefone;
	}
	public void setTelefone(Long telefone) {
		this.telefone = telefone;
	}
	public Long getCod_negocio() {
		return codNegocio;
	}
	public void setCod_negocio(Long cod_negocio) {
		this.codNegocio = cod_negocio;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (codNegocio != other.codNegocio)
			return false;
		if (cpf != other.cpf)
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (telefone != other.telefone)
			return false;
		return true;
	}
}
