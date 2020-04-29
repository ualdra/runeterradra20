package ual.dra.rest;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

public class Asset implements Serializable {

	private String gameAbsolutePath;
	private String fullAbsolutePath;
	private final static long serialVersionUID = -6446721680008168515L;

	/**
	 * No args constructor for use in serialization
	 *
	 */
	public Asset() {
	}

	/**
	 *
	 * @param fullAbsolutePath
	 * @param gameAbsolutePath
	 */
	public Asset(String gameAbsolutePath, String fullAbsolutePath) {
		super();
		this.gameAbsolutePath = gameAbsolutePath;
		this.fullAbsolutePath = fullAbsolutePath;
	}

	public String getGameAbsolutePath() {
		return gameAbsolutePath;
	}

	public void setGameAbsolutePath(String gameAbsolutePath) {
		this.gameAbsolutePath = gameAbsolutePath;
	}

	public Asset withGameAbsolutePath(String gameAbsolutePath) {
		this.gameAbsolutePath = gameAbsolutePath;
		return this;
	}

	public String getFullAbsolutePath() {
		return fullAbsolutePath;
	}

	public void setFullAbsolutePath(String fullAbsolutePath) {
		this.fullAbsolutePath = fullAbsolutePath;
	}

	public Asset withFullAbsolutePath(String fullAbsolutePath) {
		this.fullAbsolutePath = fullAbsolutePath;
		return this;
	}

	
}