package com.examly.springapp.controller;

import com.examly.springapp.model.Login;
import com.examly.springapp.model.Booking;
import com.examly.springapp.service.SuperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class SuperController {

    @Autowired
    SuperService superService;

    @PostMapping("/super/login")
    public Boolean validateAdmin(@RequestBody Login login){
        return superService.validateSuperAdmin(login);
    }

    @PostMapping("/super/deleteAdmin")
    public void deleteAdmin(int id){
        superService.deleteAdmin(id);
    }

    @PostMapping("/super/deleteUser")
    public void deleteUser(int id){
        superService.deleteUser(id);
    }

    @GetMapping("/super/bookings")
    public List<Booking> allBookings(){
        return superService.allBookings();
    }

}
