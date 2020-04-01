package ual.dra.gamesapi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import ual.dra.gamesapi.models.Game;

public interface GameRepository extends MongoRepository<Game, String> {

}