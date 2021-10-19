package com.examly.springapp.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity(name="Admin")
public class Admin {

    @Id
    @GeneratedValue
    int id;

    String email;

    String password;

    String mobileNumber;

    String sellerName;

    String userRole;

    String hotelName;

    String hotelImageURL;

    String hotelAddress;

    int earnings;
    @OneToMany(
        cascade = CascadeType.ALL,
        mappedBy="admin"
    )
    List<Room> rooms=new ArrayList<>();

}
