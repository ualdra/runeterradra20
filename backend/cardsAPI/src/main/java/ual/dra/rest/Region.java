package ual.dra.rest;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "regions")
public class Region implements Serializable {

	private String abbreviation;
	private String iconAbsolutePath;
	private String name;
	@Id
	@Column(unique = true)
	private String nameRef;
	private final static long serialVersionUID = 6918258731343946331L;

	@OneToMany(mappedBy = "regionRef", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Card> cards;
	/**
	 * No args constructor for use in serialization
	 *
	 */
	public Region() {
	}

	/**
	 *
	 * @param iconAbsolutePath
	 * @param name
	 * @param nameRef
	 * @param abbreviation
	 */
	public Region(String abbreviation, String iconAbsolutePath, String name, String nameRef) {
		super();
		this.abbreviation = abbreviation;
		this.iconAbsolutePath = iconAbsolutePath;
		this.name = name;
		this.nameRef = nameRef;
	}

	public String getAbbreviation() {
		return abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public Region withAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
		return this;
	}

	public String getIconAbsolutePath() {
		return iconAbsolutePath;
	}

	public void setIconAbsolutePath(String iconAbsolutePath) {
		this.iconAbsolutePath = iconAbsolutePath;
	}

	public Region withIconAbsolutePath(String iconAbsolutePath) {
		this.iconAbsolutePath = iconAbsolutePath;
		return this;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Region withName(String name) {
		this.name = name;
		return this;
	}

	public String getNameRef() {
		return nameRef;
	}

	public void setNameRef(String nameRef) {
		this.nameRef = nameRef;
	}

	public Region withNameRef(String nameRef) {
		this.nameRef = nameRef;
		return this;
	}

	

}