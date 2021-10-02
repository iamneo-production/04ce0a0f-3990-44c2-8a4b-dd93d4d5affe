package com.examly.springapp.controller;


import com.examly.springapp.model.User;
import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Room;


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
    public List<Room> hotelRooms(@RequestParam("id") int adminId){
        return userService.hotelRooms(adminId);
    }

    @PostMapping("/user/roomsDetails")
    public Room roomDetails(@RequestParam("id") int roomId){
        return userService.roomDetails(roomId);
    }

}
