package ual.dra.rest;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cards")
public class Card implements Serializable {

	@ElementCollection(targetClass = String.class)
	private List<String> associatedCards = null;

	@ElementCollection
	private List<String> associatedCardRefs = new ArrayList<String>();

	// @Column(name = "assets")
	@ElementCollection(targetClass = Asset.class)
	private List<Asset> assets = null;
	private String region;
	private String regionRef;

	private Integer attack;
	private Integer cost;
	private Integer health;
	private String description;
	private String descriptionRaw;
	private String levelupDescription;
	private String levelupDescriptionRaw;
	private String flavorText;
	private String artistName;
	private String name;
	@Id
	@Column(unique = true)
	private String cardCode;
//	@NotNull
//	 @ElementCollection(targetClass=String.class)
//	private List<String> keywords = null;
//	@NotNull
//	@Column(name = "keywordRefs")
//	 @ElementCollection(targetClass=String.class)
//
//	private List<String> keywordRefs = null;
	private String spellSpeed;
	private String spellSpeedRef;
	private String rarity;
	private String rarityRef;
	private String subtype;
	private String supertype;
	private String type;
	private Boolean collectible;
	@ElementCollection(targetClass = String.class)
	private List<String> keywords;
	@ElementCollection(targetClass = String.class)
	private List<String> keywordRefs;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "region_id", nullable = false)
	//private Region reg;
//	
//	public Region getReg() {
//		return reg;
//	}
//
//	public void setReg(Region reg) {
//		this.reg = reg;
//	}

	public List<String> getAssociatedCards() {
		return associatedCards;
	}

	public void setAssociatedCards(List<String> associatedCards) {
		this.associatedCards = associatedCards;
	}

	public List<String> getAssociatedCardRefs() {
		return associatedCardRefs;
	}

	public void setAssociatedCardRefs(List<String> associatedCardRefs) {
		this.associatedCardRefs = associatedCardRefs;
	}

	public List<String> getKeywords() {
		return keywords;
	}

	public void setKeywords(List<String> keywords) {
		this.keywords = keywords;
	}

	public List<String> getKeywordRefs() {
		return keywordRefs;
	}

	public void setKeywordRefs(List<String> keywordRefs) {
		this.keywordRefs = keywordRefs;
	}

	private final static long serialVersionUID = -4618197748572561495L;

	/**
	 * No args constructor for use in serialization
	 *
	 */
	public Card() {
	}

	/**
	 *
	 * @param flavorText
	 * @param supertype
	 * @param collectible
	 * @param keywords
	 * @param spellSpeed
	 * @param description
	 * @param type
	 * @param regionRef
	 * @param keywordRefs
	 * @param assets
	 * @param associatedCardRefs
	 * @param subtype
	 * @param attack
	 * @param cost
	 * @param descriptionRaw
	 * @param cardCode
	 * @param spellSpeedRef
	 * @param health
	 * @param rarityRef
	 * @param levelupDescriptionRaw
	 * @param name
	 * @param levelupDescription
	 * @param artistName
	 * @param associatedCards
	 * @param region
	 * @param rarity
	 */
	public Card(List<String> associatedCards, List<String> associatedCardRefs, List<Asset> assets, String region,
			String regionRef, Integer attack, Integer cost, Integer health, String description, String descriptionRaw,
			String levelupDescription, String levelupDescriptionRaw, String flavorText, String artistName, String name,
			String cardCode, List<String> keywords, List<String> keywordRefs, String spellSpeed, String spellSpeedRef,
			String rarity, String rarityRef, String subtype, String supertype, String type, Boolean collectible) {
		super();

		this.associatedCards = associatedCards;
		this.associatedCardRefs = associatedCardRefs;
		this.keywords = keywords;
		this.keywordRefs = keywordRefs;
		this.assets = assets;
		this.region = region;
		this.regionRef = regionRef;
		this.attack = attack;
		this.cost = cost;
		this.health = health;
		this.description = description;
		this.descriptionRaw = descriptionRaw;
		this.levelupDescription = levelupDescription;
		this.levelupDescriptionRaw = levelupDescriptionRaw;
		this.flavorText = flavorText;
		this.artistName = artistName;
		this.name = name;
		this.cardCode = cardCode;
		this.spellSpeed = spellSpeed;
		this.spellSpeedRef = spellSpeedRef;
		this.rarity = rarity;
		this.rarityRef = rarityRef;
		this.subtype = subtype;
		this.supertype = supertype;
		this.type = type;
		this.collectible = collectible;
	}

	public List<Asset> getAssets() {
		return assets;
	}

	public void setAssets(List<Asset> assets) {
		this.assets = assets;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public Card withRegion(String region) {
		this.region = region;
		return this;
	}

	public String getRegionRef() {
		return regionRef;
	}

	public void setRegionRef(String regionRef) {
		this.regionRef = regionRef;
	}

	public Card withRegionRef(String regionRef) {
		this.regionRef = regionRef;
		return this;
	}

	public Integer getAttack() {
		return attack;
	}

	public void setAttack(Integer attack) {
		this.attack = attack;
	}

	public Card withAttack(Integer attack) {
		this.attack = attack;
		return this;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}

	public Card withCost(Integer cost) {
		this.cost = cost;
		return this;
	}

	public Integer getHealth() {
		return health;
	}

	public void setHealth(Integer health) {
		this.health = health;
	}

	public Card withHealth(Integer health) {
		this.health = health;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Card withDescription(String description) {
		this.description = description;
		return this;
	}

	public String getDescriptionRaw() {
		return descriptionRaw;
	}

	public void setDescriptionRaw(String descriptionRaw) {
		this.descriptionRaw = descriptionRaw;
	}

	public Card withDescriptionRaw(String descriptionRaw) {
		this.descriptionRaw = descriptionRaw;
		return this;
	}

	public String getLevelupDescription() {
		return levelupDescription;
	}

	public void setLevelupDescription(String levelupDescription) {
		this.levelupDescription = levelupDescription;
	}

	public Card withLevelupDescription(String levelupDescription) {
		this.levelupDescription = levelupDescription;
		return this;
	}

	public String getLevelupDescriptionRaw() {
		return levelupDescriptionRaw;
	}

	public void setLevelupDescriptionRaw(String levelupDescriptionRaw) {
		this.levelupDescriptionRaw = levelupDescriptionRaw;
	}

	public Card withLevelupDescriptionRaw(String levelupDescriptionRaw) {
		this.levelupDescriptionRaw = levelupDescriptionRaw;
		return this;
	}

	public String getFlavorText() {
		return flavorText;
	}

	public void setFlavorText(String flavorText) {
		this.flavorText = flavorText;
	}

	public Card withFlavorText(String flavorText) {
		this.flavorText = flavorText;
		return this;
	}

	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public Card withArtistName(String artistName) {
		this.artistName = artistName;
		return this;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Card withName(String name) {
		this.name = name;
		return this;
	}

	public String getCardCode() {
		return cardCode;
	}

	public void setCardCode(String cardCode) {
		this.cardCode = cardCode;
	}

	public Card withCardCode(String cardCode) {
		this.cardCode = cardCode;
		return this;
	}

	public String getSpellSpeed() {
		return spellSpeed;
	}

	public void setSpellSpeed(String spellSpeed) {
		this.spellSpeed = spellSpeed;
	}

	public Card withSpellSpeed(String spellSpeed) {
		this.spellSpeed = spellSpeed;
		return this;
	}

	public String getSpellSpeedRef() {
		return spellSpeedRef;
	}

	public void setSpellSpeedRef(String spellSpeedRef) {
		this.spellSpeedRef = spellSpeedRef;
	}

	public Card withSpellSpeedRef(String spellSpeedRef) {
		this.spellSpeedRef = spellSpeedRef;
		return this;
	}

	public String getRarity() {
		return rarity;
	}

	public void setRarity(String rarity) {
		this.rarity = rarity;
	}

	public Card withRarity(String rarity) {
		this.rarity = rarity;
		return this;
	}

	public String getRarityRef() {
		return rarityRef;
	}

	public void setRarityRef(String rarityRef) {
		this.rarityRef = rarityRef;
	}

	public Card withRarityRef(String rarityRef) {
		this.rarityRef = rarityRef;
		return this;
	}

	public String getSubtype() {
		return subtype;
	}

	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}

	public Card withSubtype(String subtype) {
		this.subtype = subtype;
		return this;
	}

	public String getSupertype() {
		return supertype;
	}

	public void setSupertype(String supertype) {
		this.supertype = supertype;
	}

	public Card withSupertype(String supertype) {
		this.supertype = supertype;
		return this;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Card withType(String type) {
		this.type = type;
		return this;
	}

	public Boolean getCollectible() {
		return collectible;
	}

	public void setCollectible(Boolean collectible) {
		this.collectible = collectible;
	}

	public Card withCollectible(Boolean collectible) {
		this.collectible = collectible;
		return this;
	}

}