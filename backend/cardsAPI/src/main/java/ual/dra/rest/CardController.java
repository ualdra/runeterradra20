package ual.dra.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sun.istack.Nullable;

@RepositoryRestController 
public class CardController {

	@Autowired
	CardRepository up; 
	
	@GetMapping(path = "/cards")
	public ResponseEntity getCardsByRegion(@RequestParam(required = false) String region,
										   @RequestParam(required = false) String keyword){
		
		if (region != null) {
			return new ResponseEntity<List<Card>>(up.findByRegion(region), HttpStatus.ACCEPTED);
		}else if (keyword != null){
			return new ResponseEntity<List<Card>>(up.findByKeywords(keyword), HttpStatus.ACCEPTED);

		}else
		{
			return new ResponseEntity<Iterable<Card>>(up.findAll(), HttpStatus.ACCEPTED);
		}
	}	
	
}
