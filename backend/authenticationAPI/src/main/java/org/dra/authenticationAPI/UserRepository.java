package org.dra.authenticationAPI;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {

	User findByEmail(@Param("name") String email);
	User findByToken(@Param("token") Token token);
}