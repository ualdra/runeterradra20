package ual.dra.gamesapi.models;

import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Game {
    
    @Id
    private String id;

    @Field @JsonProperty("PlayerName")
    private String playerName;
    @Field @JsonProperty("OpponentName")
    private String opponentName;
    @Field @JsonProperty("ScreenWidth")
    private int screenWidth;
    @Field @JsonProperty("ScreenHeight")
    private int screenHeight;
    @Field @JsonProperty("GameDate")
    private String gameDate;
    
    private String idUser;
    
    @Field @JsonProperty("Plays")
    private Map<String, ArrayList<Map<String, String>>> plays = new TreeMap<String, ArrayList<Map<String, String>>>();

    public Game(){

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getOpponentName() {
        return opponentName;
    }

    public void setOpponentName(String opponentName) {
        this.opponentName = opponentName;
    }

    public int getScreenWidth() {
        return screenWidth;
    }

    public void setScreenWidth(int screenWidth) {
        this.screenWidth = screenWidth;
    }

    public int getScreenHeight() {
        return screenHeight;
    }

    public void setScreenHeight(int screenHeight) {
        this.screenHeight = screenHeight;
    }

    public Map<String, ArrayList<Map<String, String>>> getPlays() {
        return plays;
    }

    public void setPlays(Map<String, ArrayList<Map<String, String>>> plays) {
        this.plays = plays;
    }

	public String getGameDate() {
		return gameDate;
	}

	public void setGameDate(String gameDate) {
		this.gameDate = gameDate;
	}

    
}