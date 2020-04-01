package org.dra.authenticationAPI;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ROLE") 
public class Role implements Serializable{

    @Id
	@NotNull
	@Size(max = 100)
	@Column(name = "role_name")
	private String role_name;
	
    @NotNull
    @Column(name = "prority")
	private double priority;
    
    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<User> users;
	
    public Role() {
    	
    }
    
    public Role(String roleName, double priority) {
    	this.role_name = roleName;
    	this.priority = priority;
    }

	public String getRole_name() {
		return role_name;
	}

	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}

	public double getPriority() {
		return priority;
	}

	public void setPriority(double priority) {
		this.priority = priority;
	}
    
}
