package org.dra.authenticationAPI;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "ROLE") 
public class Role{

    @Id
	@NotNull
	@Size(max = 100)
	@Column(name = "name")
	private String name;
	
    @NotNull
    @Column(name = "priority")
	private double priority;
    
    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    @JsonBackReference
    private Set<User> users;
	
    public Role() {
    	
    }
    
    public Role(String name, double priority) {
    	this.name = name;
    	this.priority = priority;
    }


	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPriority() {
		return priority;
	}

	public void setPriority(double priority) {
		this.priority = priority;
	}
    
}
