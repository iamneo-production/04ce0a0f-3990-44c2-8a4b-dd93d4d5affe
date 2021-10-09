package com.examly.springapp.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name="room")
public class Room {

    @Id
    @GeneratedValue
    int id;

    String roomNo;

    String status = "AVAILABLE";

    String price;

    String type;
    @ManyToOne(
            cascade = CascadeType.PERSIST,fetch = FetchType.LAZY
    )
    @JoinColumn(
            name="adminid",
            nullable = false
    )
    @JsonBackReference
    Admin admin;

}
