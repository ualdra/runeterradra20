package org.dra.authenticationAPI;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "USERS")
public class User implements Serializable{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotNull
    @Size(max = 100)
    @Column(name = "username")
	private String username;
	
	@NotNull
    @Email
    @Size(max = 100)
    @Column(unique = true)
    private String email;
	
	@NotNull
	@Size(max = 100)
	@Column(name = "password")
	private String password;
	
	@JsonFormat(pattern="dd-MM-yyyy")
	@Column(name ="created_At")
	private LocalDate created_At;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "role_name", nullable = false)
    private Role role;
	
	@OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "user", optional = false)
    private Token token;
	
	public User() {
		this.created_At = java.time.LocalDate.now();
	}
	
	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = passwordEncoder(password);
        this.created_At = java.time.LocalDate.now();
	}
	
	public String passwordEncoder(String password) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getCreated_At() {
		return created_At;
	}

	public void setCreated_At(LocalDate created_At) {
		this.created_At = created_At;
	}
	
}
