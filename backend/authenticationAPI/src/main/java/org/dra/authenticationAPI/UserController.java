package org.dra.authenticationAPI;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;


@RestController
public class UserController{
	
	@Autowired
	UserRepository up;
	
	@Autowired
	TokenRepository tr;
	
	@Autowired
	RoleRepository rr;
	
	@PostMapping(value = "/login")
	ResponseEntity<Token> login(@RequestBody User user) {
		try {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			User u = up.findByEmail(user.getEmail());
			if(passwordEncoder.matches(user.getPassword(), u.getPassword())) {
				Token t;
				if(u.getToken() != null) {
					t = u.getToken();
					t.setToken(u);
					t = tr.save(t);
				}
				else {
					t = new Token(u);
					t = tr.save(t);
				}
				return new ResponseEntity<Token>(t, HttpStatus.ACCEPTED);
			}
			return new ResponseEntity<Token>(HttpStatus.BAD_REQUEST);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<Token>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/signin")
	ResponseEntity<User> signIn(@RequestBody User user) {
		try {
			User u = new User(user.getUsername(), user.getEmail(), user.getPassword());
			up.save(u);
			return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
		}
		catch(Exception ex){
			ex.printStackTrace();
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/createrole")
	ResponseEntity<Role> createRole(@RequestBody Role role) {
		try {
			Role r = new Role(role.getRole_name(), role.getPriority());
			rr.save(r);
			return new ResponseEntity<Role>(r, HttpStatus.ACCEPTED);
		}
		catch(Exception ex){
			ex.printStackTrace();
			return new ResponseEntity<Role>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping(value = "/assignrole")
	ResponseEntity<User> assignRole(@RequestBody User user) {
		try {
			User u = up.findByEmail(user.getEmail());
			u.setRole(user.getRole());
			up.save(u);
			return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/checkrole")
	//checks roles of an user passing the token of the user logged
	ResponseEntity<Role> checkRole (@RequestBody Token token) {
		try {
			Token t = tr.findByToken(token.getToken());
			User u = up.findByToken(t);
			return new ResponseEntity<Role>(u.getRole(), HttpStatus.ACCEPTED);
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<Role>(HttpStatus.BAD_REQUEST);
		}
	}
	
	
}
