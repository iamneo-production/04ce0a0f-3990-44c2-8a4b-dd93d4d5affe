package com.examly.springapp.controller;


import com.examly.springapp.model.User;
import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Room;
import com.examly.springapp.model.Booking;
import com.examly.springapp.model.BookingData;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.service.UserService;
import java.util.List;


@RestController
public class UserController {
    
    @Autowired
    UserService userService;

    @PostMapping("/user/editProfile")
    public User userProfileEdit(@RequestBody User user){
        return userService.userProfileEdit(user);
    }

    @GetMapping("/user/dashboard")
    public List<Admin> userDashboard(){
        return userService.userDashboard();
    }

    @PostMapping("/user/rooms")
    public List<Room> hotelRooms(@RequestParam("id") int id){
        return userService.hotelRooms(id);
    }

    @PostMapping("/user/roomsDetails")
    public Room roomDetails(@RequestParam("id") int id){
        return userService.roomDetails(id);
    }

    @PostMapping("/user/bookRoom")
    public Booking bookRoom(@RequestBody BookingData bookingData){
        return userService.userBookRoom(bookingData);
    }

    @PostMapping("/user/bookings")
    public List<Booking> getBookings(@RequestParam("id") int id){
        return userService.userBookings(id);
    }

    @GetMapping("user/detail")
    public User getUser(@RequestParam("email") String email){
        return userService.getUser(email);
    }
    @GetMapping("user/by")
    public User getUser(@RequestParam("id") int id){
        return userService.getUserById(id);
    }


}
