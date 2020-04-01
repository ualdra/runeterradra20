package org.dra.authenticationAPI;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface TokenRepository extends CrudRepository<Token, Long>{

	Token findByToken(@Param("token") String token);
}
