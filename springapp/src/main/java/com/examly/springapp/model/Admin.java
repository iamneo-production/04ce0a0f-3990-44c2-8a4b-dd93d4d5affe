package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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
    @JsonManagedReference
    public List<Room> getRooms(){
        return rooms;
    }
    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

}
