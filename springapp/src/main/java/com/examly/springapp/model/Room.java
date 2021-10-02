package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

    String adminId;

    String status;

    String price;

    String type;
}
