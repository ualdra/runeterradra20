package ual.dra.rest;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface CardRepository extends CrudRepository<Card, String> {

	//Player findByNombre(String nombre);
	List<Card> findByRegion(String region);

	List<Card> findByKeywords(String keyword);

}