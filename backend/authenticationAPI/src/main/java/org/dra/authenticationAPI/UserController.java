package org.dra.authenticationAPI;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
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
	String login(@RequestBody User user) {
		try {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			User u = up.findByEmail(user.getEmail());
			if(passwordEncoder.matches(user.getPassword(), u.getPassword())) {
				Token t = new Token(u);
				tr.save(t);
				return t.getToken() + " " + u.getUsername();
			}
			return "Contraseña Incorrecta";
		} catch (Exception ex) {
			ex.printStackTrace();
			return "Usuario no encontrado";
		}
	}
	
	@PostMapping(value = "/signin")
	boolean signIn(@RequestBody User user) {
		try {
			User u = new User(user.getUsername(), user.getEmail(), user.getPassword());
			up.save(u);
			return true;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
	}
	
	@PostMapping(value = "/createrole")
	boolean createRole(@RequestBody Role role) {
		try {
			Role r = new Role(role.getRole_name(), role.getPriority());
			rr.save(r);
			return true;
		}
		catch(Exception ex){
			ex.printStackTrace();
			return false;
		}
	}
	
	@PutMapping(value = "/assignrole")
	boolean assignRole(@RequestBody User user) {
		try {
			User u = up.findByEmail(user.getEmail());
			u.setRole(user.getRole());
			up.save(u);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	@PostMapping(value = "/checkrole")
	//checks roles of an user passing the token of the user logged
	String checkRole (@RequestBody Token token) {
		try {
			Token t = tr.findByToken(token.getToken());
			User u = up.findByToken(t);
			return u.getRole().getRole_name();
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return ("No user with that token");
		}
	}
	
	
}
