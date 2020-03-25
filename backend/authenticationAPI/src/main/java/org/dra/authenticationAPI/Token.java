package org.dra.authenticationAPI;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "TOKEN")
public class Token {
	
	@Size(max = 100)
	@Column(unique = true)
	private String token;
	
	@NotNull
	@JsonFormat(pattern="dd-MM-yyyy")
	@Column(name ="created_At")
	private LocalDate created_at;
	
	@NotNull
	@JsonFormat(pattern="dd-MM-yyyy")
	@Column(name ="created_At")
	private LocalDate expired_at;
	
	@Size(max = 100)
	@Column(unique = true)
	private String renew_token;
	
	@Id
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
	
	public Token() {
		
	}
	
	public Token(String email) {
		this.token = passwordEncoder(java.time.LocalDate.now().toString());
		this.created_at = java.time.LocalDate.now();
		this.expired_at = java.time.LocalDate.now().plusYears(1);
		this.renew_token = passwordEncoder(this.expired_at.toString());
		
	}
	
	@Bean
	public String passwordEncoder(String localDate) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(localDate);
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
