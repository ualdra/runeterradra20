package org.dra.authenticationAPI;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface RoleRepository extends CrudRepository<Role, String>{
	Role findByName(@Param("name") String name);
}
