package ual.dra.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface RegionRepository extends CrudRepository<Region, String> {
	
	//Player findByNombre(String nombre);

}