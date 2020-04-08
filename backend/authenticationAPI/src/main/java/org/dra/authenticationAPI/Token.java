package org.dra.authenticationAPI;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "TOKEN")
public class Token{
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Size(max = 100)
	@Column(unique = true)
	private String token;
	
	@JsonFormat(pattern="dd-MM-yyyy")
	@Column(name ="created_at")
	private LocalDate created_at;
	
	@JsonFormat(pattern="dd-MM-yyyy")
	@Column(name ="expired_at")
	private LocalDate expired_at;
	
	@Size(max = 100)
	private String renew_token;
	
	@OneToOne
	@MapsId
	@JsonBackReference
    private User user;
	
	public Token() {
		this.created_at = java.time.LocalDate.now();
		this.expired_at = java.time.LocalDate.now().plusYears(1);
	}
	
	
	public Token(User user) {
		this.token = passwordEncoder(java.time.LocalDate.now().toString()+user.getEmail());
		this.created_at = java.time.LocalDate.now();
		this.expired_at = java.time.LocalDate.now().plusYears(1);
		this.renew_token = passwordEncoder(this.expired_at.toString());
		this.user = user;
	}
	
	public String passwordEncoder(String localDate) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(localDate);
	}

	public void generateToken(User user) {
		this.token = passwordEncoder(java.time.LocalDate.now().toString()+user.getEmail());
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public LocalDate getCreated_at() {
		return created_at;
	}


	public void setCreated_at(LocalDate created_at) {
		this.created_at = created_at;
	}


	public LocalDate getExpired_at() {
		return expired_at;
	}


	public void setExpired_at(LocalDate expired_at) {
		this.expired_at = expired_at;
	}


	public String getRenew_token() {
		return renew_token;
	}


	public void setRenew_token(String renew_token) {
		this.renew_token = renew_token;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
}




