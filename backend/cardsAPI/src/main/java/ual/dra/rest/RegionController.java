package ual.dra.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegionController {

	@Autowired
	RegionRepository up;
	
	
//	@GetMapping(path = "/getRankingByName")
//	public ResponseEntity<String> getByName(@RequestParam String nombre){
//		System.out.println("dentro del metodo");
//		return new ResponseEntity<String>("El ranking de " + nombre + " es: " + up, HttpStatus.ACCEPTED);
//	}	
//	
}
