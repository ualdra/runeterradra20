package org.dra.authenticationAPI;

import org.springframework.beans.factory.annotation.Autowired;
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
	ResponseEntity login(@RequestBody User user) {
		try {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			User u = up.findByEmail(user.getEmail());
			if(passwordEncoder.matches(user.getPassword(), u.getPassword())) {
				Token t;
				if(u.getToken() != null) {
					t = u.getToken();
					t.generateToken(u);
					t = tr.save(t);
				}
				else {
					t = new Token(u);
					t = tr.save(t);
				}
				return new ResponseEntity<Token>(t, HttpStatus.ACCEPTED);
			}
			return new ResponseEntity("Incorrect Password", HttpStatus.BAD_REQUEST);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<String>("User doesn't exist", HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/signin")
	ResponseEntity signIn(@RequestBody User user) {
		try {
			User u = new User(user.getUsername(), user.getEmail(), user.getPassword());
			up.save(u);
			return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
		}
		catch(Exception ex){
			ex.printStackTrace();
			return new ResponseEntity("User with given email already exist",HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/createrole")
	ResponseEntity createRole(@RequestBody Role role) {
		try {
			Role r = new Role(role.getName(), role.getPriority());
			rr.save(r);
			return new ResponseEntity<Role>(r, HttpStatus.ACCEPTED);
		}
		catch(Exception ex){
			ex.printStackTrace();
			return new ResponseEntity<String>("Couldn't create role", HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping(value = "/assignrole")
	ResponseEntity assignRole(@RequestBody User user) {
		try {
			User u = up.findByEmail(user.getEmail());
			Role r = rr.findByName(user.getRole().getName());
			u.setRole(r);
			up.save(u);
			return new ResponseEntity<User>(u, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Couldn't assign role to the given User", HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping(value = "/checktoken")
	//checks roles of an user passing the token of the user logged
	ResponseEntity checkToken (@RequestBody Token token) {
		try {
			System.out.println(token.getToken());
			Token t = tr.findByToken(token.getToken());
			return new ResponseEntity<User>(t.getUser(), HttpStatus.ACCEPTED);
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<String>("User not found with the given Token", HttpStatus.BAD_REQUEST);
		}
	}

}
